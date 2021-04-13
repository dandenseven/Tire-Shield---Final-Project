import React, { useState } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Trips from './components/Trips';
import Weather from './components/Weather';
import TireMain from './components/TireMain';
import NavBar from './components/NavBar';

import './App.css';

function App() {

  return (
    
      <BrowserRouter>
          <NavBar />
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/logout">
              <Logout />
          </Route>
          <Route path="/trips">
              <Trips />
          </Route>
          <Route path="/signup">
              <Signup />
          </Route>
          <Route path="/TireMain">
              <TireMain />
          </Route>
          <Route path="/Weather">
              <Weather />
          </Route>

        
      </BrowserRouter>
  )

}

export default App;
