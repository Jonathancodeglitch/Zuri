import './App.scss';
import share from './images/avater_share.svg';
import profile from './images/profile.jpg';
import menu from './images/menu_link.svg';
// social Icons
import slack from './images/slack.svg';
import git from './images/git.svg';
// footer Icon
import Zuri_logo from './images/Zuri.Internship_Logo.svg';
import I4G from './images/I4G.svg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="profile_section">
          <div className='user'>
            <img id="profile__img" src={profile} alt="avater"/>
            <p id="twitter">Jonathan kendrick</p>
            <p id="slack">glitch</p>
          </div>
          <img id="share__link" src={share} alt="shareLink"/>
          <img id="menu__img" src={menu} alt="menuLink"/>
        </div>
        <div className="link_section">
          <a href='https://twitter.com/jonatha62141643?t=x5Xm8d_OUq0obCaBHgUNfQ&s=08' className='link'>Twitter Link</a>
          <a href='https://training.zuri.team/' className='link' id='btn__zuri'>Zuri Team</a>
          <a href='http://books.zuri.team' className='link' id='books'>Zuri Books</a>
          <a href='https://books.zuri.team/python-for-beginners?ref_id=okeibunoremma' className='link' id='book__python'>Python Books</a>
          <a href='https://background.zuri.team' className='link' id='pitch'>Background Check for Coders</a>
          <a href='https://books.zuri.team/design-rules' className='link' id='book__design'>Design Books</a>
        </div>
        <div className="socialIcons">
          <a href='https://hng9.slack.com/' className='socialIcon'>
            <img src={slack} alt="slack_icon"/>
          </a>
          <a href='https://github.com/trokeibunor' className='socialIcon'>
            <img src={git} alt="git_icon"/>
          </a>
        </div>
      </div>
      <footer>
       <img src={Zuri_logo} alt='zuri_logo'/>
       <p>HNG Internship 9 Frontend Task</p>
       <img src={I4G} alt='i4g log'/>
      </footer>
    </div>
  );
}

export default App;
