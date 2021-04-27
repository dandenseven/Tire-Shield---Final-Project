import React, { useContext, useState, useEffect} from 'react';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';


function WeatherPage() {
    const[weather, setWeather] = useState();

    const userId = useContext(FirebaseContext).uid

    async function getWeather() {
        const configs = {
            method: 'post',
            data: JSON.stringify({"user_id": userId}),
            headers: {"Content-Type": "application/json"}
        }
        const response = await fetch("http://localhost:5000/api/users_weather", configs);
        const trips = await response.json();
        console.log(weather)
        setWeather(weather);
    }

    useEffect (() => getWeather(), []);


    return (
        <AuthUserContext.Consumer>
            {authUser => (
            <div>
                <p>LOCAL WEATHER</p>
                <p>10 DAY FORCAST</p>
                <button >Working Progress</button>
                
            </div>
        )}

    </AuthUserContext.Consumer>
    );

}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(WeatherPage);