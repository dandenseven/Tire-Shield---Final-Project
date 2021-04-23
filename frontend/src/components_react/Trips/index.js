import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';


const TripsPage = () => (
    <AuthUserContext.Consumer> 
        {authUser => (
        <div>
            <label for="input">Starting Address:</label>
            <input type="text" id="input" name="input"></input><br></br>
            <label for="input">Trip Destination:</label>
            <input type="text" id="input" name="input"></input><br></br>
        <section><p>MAP</p></section><bk/>

        </div>
    )}

    </AuthUserContext.Consumer>

);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(TripsPage);