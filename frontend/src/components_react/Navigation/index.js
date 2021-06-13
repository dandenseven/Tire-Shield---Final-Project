import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import '../../Css/Layout/Navigation.css';


const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>



);

const NavigationAuth = () => (

<body>
  <div className="example-parent">
    <div className="container">
      <input data-function="swipe" id="swipe" type="checkbox"></input>
      <label data-function="swipe" for="swipe">&#xf057;</label>
      <label data-function="swipe" for="swipe">&#xf0c9;</label>
    
  
  
        <div className="sidebar">
          <nav className="menu">
          
            <ul>
              <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
              </li>
              <li>
                <Link class="active"to={ROUTES.HOME}>Home</Link>
              </li>
              <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
              </li>
              <li>
                <Link to={ROUTES.VEHICLE}>Vehicles</Link>
              </li>
              <li>
                <Link to={ROUTES.TRIPS}>Trips</Link>
              </li>
              <li>
                <Link to={ROUTES.WEATHER}>Weather</Link>
              </li>
              <li>
                <Link to={ROUTES.ADDTRIP}>AddTrip</Link>
              </li>
              <li>
                <Link to={ROUTES.ADDVEHICLE}>AddVehicle</Link>
              </li>
              {/* <li>
                <Link to={ROUTES.ADDUSER}>AddUser</Link>
              </li> */}
              <li>
                <SignOutButton />
              </li>
            </ul>
          </nav>
        </div>


    </div>
  </div>
</body>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);
export default Navigation;