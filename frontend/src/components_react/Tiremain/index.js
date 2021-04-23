import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';


const TireMainPage = () => (
    <AuthUserContext.Consumer> 
        {authUser => (
        <div>
            <h2>Tire Milage</h2>
            <h2>Current Tire Miles</h2>
            <h2>Tire Warning Message</h2>
        </div>
    )}

    </AuthUserContext.Consumer>

);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(TireMainPage);
