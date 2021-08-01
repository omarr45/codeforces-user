import './User.scss';

import { useEffect, useState } from 'react';

import axios from 'axios';

const User = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('tourist');
  const [handle, setHandle] = useState('tourist');
  const [error, setError] = useState(null);

  const fetchData = async () =>
    axios
      .get('https://codeforces.com/api/user.info?handles=' + handle)
      .catch((error) => {
        setError(error.response.data.comment);
      });

  const handleHandle = (e) => {
    setHandle(e.target.value);
  };

  const handleSubmit = () => {
    setUsername(handle);
    fetchData()
      .then((response) => {
        if (response.data.status === 'OK') {
          const curUser = response.data.result[0];
          setUser(curUser);
          const root = document.documentElement;
          if (curUser.rating >= 3000) {
            root?.style.setProperty('--user-color', '#AA0000');
          } else if (curUser.rating >= 2600) {
            root?.style.setProperty('--user-color', '#FF3333');
          } else if (curUser.rating >= 2400) {
            root?.style.setProperty('--user-color', '#FF0000');
          } else if (curUser.rating >= 2300) {
            root?.style.setProperty('--user-color', '#FF8C00');
          } else if (curUser.rating >= 2100) {
            root?.style.setProperty('--user-color', '#FFCC88');
          } else if (curUser.rating >= 1900) {
            root?.style.setProperty('--user-color', '#AA00AA');
          } else if (curUser.rating >= 1600) {
            root?.style.setProperty('--user-color', '#0000FF');
          } else if (curUser.rating >= 1400) {
            root?.style.setProperty('--user-color', '#03A89E');
          } else if (curUser.rating >= 1200) {
            root?.style.setProperty('--user-color', '#008000');
          } else {
            root?.style.setProperty('--user-color', '#808080');
          }
          setError(null);
        } else {
          setUser(null);
          setError(response.data.comment);
          console.log(response.data.comment);
        }
      })
      .catch((error) => {
        setUser(null);
        setError(error.message);
      });
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const timeInSecondsToDate = (timeInSeconds) => {
    const date = new Date(timeInSeconds * 1000);
    return date.toLocaleDateString();
  };

  const displayNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}>
        <input
          type='text'
          placeholder='Enter handle'
          onChange={handleHandle}
          value={handle}
        />
        <button type='submit' onClick={handleSubmit}>
          Search
        </button>
      </form>

      <div className='user_wrapper'>
        {error && (
          <p className='error'>
            Can't find <code>{username}</code> or Codeforces API is down
          </p>
        )}
        {user && (
          <>
            <div className='col_one'>
              <div className='image_wrapper'>
                <img
                  className='profile_picture'
                  src={user.titlePhoto}
                  alt='avatar'
                />
              </div>
              <h3 className='rank'>{user.rank}</h3>
            </div>
            <ul className='user_list'>
              {user.firstName && (
                <li className='name'>
                  {user.firstName} {user.lastName}
                </li>
              )}
              {user.handle && <li className='handle'>{user.handle}</li>}
              {user.city && user.country && (
                <li className='city'>
                  <i className='fas fa-map-marker-alt'></i>
                  <b>Location:</b> {user.city}, {user.country}
                </li>
              )}
              {user.organization && (
                <li className='org'>
                  <i className='fas fa-university'></i>
                  <b>From:</b> {user.organization}
                </li>
              )}
              <li className='data rating'>
                <i className='fas fa-chart-line'></i>
                <b>Rating:</b> {user.rating} (<b>max. </b>
                {user.maxRank}, {user.maxRating})
              </li>
              <li className='data friends'>
                <i className='fas fa-user-friends'></i>
                <b>Friends:</b> {displayNumberWithCommas(user.friendOfCount)}{' '}
                users
              </li>
              <li className='data contrib'>
                <i className='fas fa-plus'></i>
                <b>Contributions:</b> {user.contribution}
              </li>
              <li className='data lastvisit'>
                <i className='far fa-clock'></i>
                <b>Last Visit:</b>{' '}
                {timeInSecondsToDate(user.lastOnlineTimeSeconds)}
              </li>
              <li className='data registered'>
                <i className='far fa-calendar-alt'></i>
                <b>Registered:</b>{' '}
                {timeInSecondsToDate(user.registrationTimeSeconds)}
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default User;
