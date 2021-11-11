import HorizontalBar from '../molecules/HorizontalBar';
import Dropdown from '../molecules/Dropdown';
import Session from '../molecules/Session';
import Button from '../atoms/Button';
import {connect} from 'react-redux';
import {setUser} from '../../actions/index';
import {useNavigate, NavLink} from 'react-router-dom';
import Brand from '../atoms/Brand';
import HoverDropdown from '../molecules/HoverDropdown';

function AppNav({user, setUser}) {

  const navigate = useNavigate();

  const handleLogOut = () => setUser(null);

  const renderUserSession = () => {
    if(user) return(
      <HoverDropdown
      styleClass="user-dropdown"
      labelText={user.name} 
      list={
        <>
          {user.admin && 
            <>
              <li><NavLink to="/beats/new">Upload</NavLink></li>
              <li>Activity</li>
            </>
          }
          <li>My Beats</li>
        </>
      }
      >
        <Session>
          <Button styleClass="session-button header-button" text="Log Out" handleClick={handleLogOut}/>
        </Session>
      </HoverDropdown>
    );

    return(
    <Session>
      <Button styleClass="header-button nav-login" text="Log In" handleClick={() => navigate('/login')}/>
      <Button styleClass="header-button" text="Sign Up" handleClick={() => navigate('/signup')}/>
    </Session>
    );
    
  };

  return(
    <header id="header">
      <Dropdown styleClass="nav-dropdown" icon="fas fa-bars">
        <NavLink to="/" >Home</NavLink> 
        <NavLink to="/beats">Beats</NavLink>  
        <NavLink to="/merchandise">Merchandise</NavLink> 
        <NavLink to="/contact_us">Contact Us</NavLink> 
      </Dropdown>

      <Brand styleClass="nav-logo"/>
      <HorizontalBar styleClass="navbar">
        <NavLink to="/" end >Home</NavLink> 
        <NavLink to="/beats">Beats</NavLink>  
        <NavLink to="/merchandise">Merchandise</NavLink> 
        <NavLink to="/contact_us">Contact Us</NavLink> 
      </HorizontalBar>

      {renderUserSession()}
      

    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.current
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (data) => {dispatch(setUser(data))}
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNav);