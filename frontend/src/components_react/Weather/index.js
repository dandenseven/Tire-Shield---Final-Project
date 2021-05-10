import React, { useContext, useState, useEffect } from 'react';
import Login from '../../components/Login';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';

function WeatherPage() {
    const[weather, setWeather] = useState([]);
    const[lat, setLat] = useState("")
    const[lon, setLon] = useState("")
    const[time, setTime] = useState("")


    const userId = useContext(FirebaseContext).auth.currentUser.uid 

    async function getWeather() {
        // const configs = {
        //     method: 'get',
        //     data: JSON.stringify({}),
        //     headers: {"Content-Type": "application/json"}
    

        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&lang=en&appid=${6693af864d042d45210a62d91db9b718}`);
        const userWeather = await response.json();
        console.log(userWeather)
        setWeather(userWeather);

        // if (response.status === 200) {
        //     return { success: true, data: response.json() };
        // }

        // return {success: false, error: response.statusText };

    }


    useEffect (() => getWeather(), []);

        return (
            <div>
                <h2>Current Weather</h2>
                
            </div>

        );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(WeatherPage);