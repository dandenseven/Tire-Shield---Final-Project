import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';


const WeatherPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <section><p>LOCAL WEATHER</p></section><bk/>
                <section><p>10 DAY FORCAST</p></section><bk/>
                <button >Working Progress</button>
            </div>
    )}

    </AuthUserContext.Consumer>

);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(WeatherPage);