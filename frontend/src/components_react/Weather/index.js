import React, { useContext, useState, useEffect } from 'react';
import Login from '../../components/Login';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';

function WeatherPage() {
    const[weather, setWeather] = useState([]);
    const[userLocation, setUserLocation] = useState([]);
    const[currentLocation, setCurrentLocation] = useState("");


    const userId = useContext(FirebaseContext).auth.currentUser.uid 

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         let coordinates = position.coords;
    //         setCurrentLocation(coordinates);
    //         console.log(coordinates)
    //     }, (err) => {
    //         console.warn(`Error(${err.code}): ${err.message}`);
    //     }, {
    //         enableHighAccuracy: true,
    //         timeout: 5000,
    //         maximumAge: 0
    //     });
    // }, []);



    async function getWeather() {

    // navigator.geolocation.getCurrentPosition(
    //         function(location) { console.log(location) }
    //     )
        // const configs = {
        //     method: 'get',
        //     data: JSON.stringify({}),
        //     headers: {"Content-Type": "application/json"}
    
    
    // function getPosition(location) {
    //     return location
    // }
    // const location = await navigator.geolocation.getCurrentPosition(getPosition, getError)
    // console.log(location)

    const location = await fetch (navigator.geolocation.getCurrentPosition(
        function(location) { console.log(location) }
    ))

    async function getPosition(location) {
        return location
    }

    function getError(error) {
        return console.log(error)
    }


        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=40.71&lon=-74.00&dt=20215101619&lang=en&appid=6693af864d042d45210a62d91db9b718`);
        const userWeather = await response.json();
        console.log(userWeather)
        setWeather(userWeather);

        // if (response.status === 200) {
        //     return { success: true, data: response.json() };
        // }

        // return {success: false, error: response.statusText };

        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.71,-74.00&key=AIzaSyC98mWMfSiEOhKrhwhN04WW2dKb_2lT_QY`);
        const userLocation = await response.json();
        console.log(userLocation)
        setUserLocation(userLocation);
    }


    useEffect (() => getWeather(), []);

        return (
            <div>
                <h2>Current Weather</h2>
                {/* <button onClick={() => console.log(currentLocation)}>Show coordinates</button> */}
                
            </div>

        );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(WeatherPage);