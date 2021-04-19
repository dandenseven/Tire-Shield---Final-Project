import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import app from 'firebase/app';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
 
import * as ROUTES from '../../constants/routes';
 
const App = () => ( 

  <Router>
    <div>
      <Navigation />
 
      <hr />
 
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>


);

const config = {
    apiKey: process.env.AIzaSyDEbzt9TfJJZZxuZsH_qXv3eeb5g62GgmE,
    authDomain: process.env.my-finalproject-2b552.firebaseapp.com,
    databaseURL: process.env.
    projectId: process.env.my-finalproject-2b552,
    storageBucket: process.env.my-finalproject-2b552.appspot.com,
    messagingSenderId: process.env.512038742459,
};

class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }

export default App;
