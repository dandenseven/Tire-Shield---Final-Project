import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import '../../Sass/Layout/Navigation.scss';

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
  <header>
    <div className="Navigation">
    
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
            <Link to={ROUTES.TIREMAIN}>Tiremain</Link>
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
      </div>
    </header>
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