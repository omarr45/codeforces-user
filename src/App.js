import './App.css';

import GithubCorner from 'react-github-corner';
import User from './components/User';

function App() {
  return (
    <>
      <User />
      <GithubCorner
        href='https://github.com/omarr45/codeforces-user'
        target='_blank'
        bannerColor='#151513'
        octoColor='white'
        size={140}
        direction='right'
      />
    </>
  );
}

export default App;
