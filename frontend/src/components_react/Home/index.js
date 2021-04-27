import React, { useContext, useState, useEffect} from 'react';
import { FirebaseContext } from '../Firebase';

import { withAuthorization } from '../Session';

function HomePage() {
    const[weather, setWeather] = useState();
    const[vehicles, setVehicles] = useState();

    const userId = useContext(FirebaseContext).uid

    // async function getWeather() {
    //     const configs = {
    //         method: 'post',
    //         data: JSON.stringify({"id": id}),
    //         headers: {"Content-Type": "application/json"}
    //     }
    //     const response = await fetch("http://localhost:5000/weather_read");
    //     const weather = await response.json();
    //     setWeather(weather);
    // }

    async function getVehicles() {
        const configs = {
            method: 'post',
            data: JSON.stringify({"user_id": userId}),
            headers: {"Content-Type": "application/json"}
        }
        const response = await fetch("http://localhost:5000/api/users_vehicle", configs);
        const vehicles = await response.json();
        console.log(vehicles)
        setVehicles(vehicles);
    }

    useEffect (() => getVehicles(), []);

    return (
        
        <div>
            <h1>Home Page</h1>
            <p>The Home Page is accessible by every signed in user.</p>
            {/* <button onClick ={getVehicles}></button> */}
            <button onClick={() => setVehicles(vehicles)}>{getVehicles}</button>
        </div>
        );
}
    
const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);