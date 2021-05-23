import React, { useContext, useState, useEffect} from 'react';
import { FirebaseContext } from '../Firebase';
import './home.css';
// import '../../Sass/Components/Rcorners.scss';
import { withAuthorization } from '../Session';

function HomePage() {
    const[vehicles, setVehicles] = useState([]);
    const[trips, setTrips] = useState([]);
    const[weather, setWeather] = useState({});

    const userId = useContext(FirebaseContext).auth.currentUser.uid

    async function getVehicles() {
        console.log(userId)
        const configs = {
            method: 'post',
            body: JSON.stringify({"user_id": userId}),
            headers: {"Content-Type": "application/json"}
        }
        const response = await fetch("http://localhost:5000/api/users_vehicle", configs);
        const userVehicles = await response.json();
        console.log(userVehicles)
        setVehicles(userVehicles);
    }


    async function getTrips() {
        const configs = {
            method: 'post',
            body: JSON.stringify({"user_id": userId}),
            headers: {"Content-Type": "application/json"}
        }
        const response = await fetch("http://localhost:5000/api/users_trip", configs);
        const userTrips = await response.json();
        console.log(userTrips)
        setTrips(userTrips);
    }

    async function getWeather() {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=40.71&lon=-74.00&dt=2021518932&units=imperial&lang=en&appid=6693af864d042d45210a62d91db9b718`);

        const userWeather = await response.json();
        console.log(userWeather)
        setWeather(userWeather);
    
    }



    useEffect (() => getVehicles(), []);

    useEffect (() => getTrips(), []);

    useEffect (() => getWeather(), []);


    return (
        
        <div>
            <h1 className="pageheader">Dashboard</h1>

                {/* <p>The Home Page is accessible by every signed in user.</p>
                    <p>show last vehicle used</p>
                        <p>show most recent trip</p>
                            <p>show current miles</p>
                                <p>show weather snapshot</p>
                                    <p> show last login</p>
                                        <p>show tire status</p>
                                            <p>show tire rotation expected date</p>
                                                <p>show oil change expected date</p> */}

                        

                    <div className="row">
                        <div className="column">
                            <h1>My Vehicles</h1>
                            {vehicles.map(vehicle => 
                            <div>
                                {/* <div className="column"  className="grid-container" > */}
                                
                                    <table>
                                        <p id={"rcorners3"}>
                                            
                                            <tr>
                                                <th>Make:</th>
                                                <th>{vehicle[1].make}</th><bk></bk>
                                            </tr>
                                            <tr>
                                                <th>Model:</th>
                                                <td>{vehicle[1].model}</td>
                                            </tr><bk></bk>
                                            <tr>
                                                <th>Current tire miles:</th>
                                                <td>{vehicle[1].total_miles}</td>
                                                </tr><bk></bk>
                                            <tr>
                                                <th>Tire miles:</th> 
                                                <td>{vehicle[1].tire_miles}</td>
                                                </tr><bk></bk>
                                            <tr>
                                                <th>Tire purchased date:</th> 
                                                <td>{vehicle[1].tire_purchase_date}</td>
                                            </tr><bk></bk>
                                            <tr>
                                                <th>Miles until rotation:</th> 
                                                <td>{vehicle[1].rotation_miles}</td>
                                            </tr><bk></bk>
                                            <tr>
                                                <th>Color:</th> 
                                                <td>{vehicle[1].color}</td>
                                            </tr><bk></bk>
                                            <tr>
                                                <td>{vehicle.user_id}</td>
                                            </tr>
                                            </p>
                                    </table>
                                {/* // </div> */}
                            </div>)}
                        
                        </div>
                
            
                        <div className="column">
                            <h1>My Trips</h1> 
                            {trips.map(trip => 
                                <div>
                                    
                                    <table>
                                        <p id={"rcorners4"}><tr>
                                        <th>Starting route:</th>
                                        <th>{trip.starting}</th><bk></bk>
                                        </tr><bk></bk>
                                        <tr>
                                            <th>Destination:</th>
                                            <td>{trip.destination}</td>
                                        </tr><bk></bk>
                                        <tr>
                                            <th>Distance:</th>
                                            <td>{trip.distance}</td>
                                        </tr><bk></bk>
                                        <tr>
                                            <th>Weather:</th>
                                            <td>{trip.weather}</td>
                                        </tr><bk></bk>
                                        <tr></tr>
                                        <tr>
                                            <th>Start date:</th>
                                            <td>{trip.start_date}</td>
                                        </tr><bk></bk>
                                        <tr>
                                            <th>End date:</th>
                                            <td>{trip.end_date}</td>
                                        </tr><bk></bk>
                                        <tr>
                                            <th>Vehicle id:</th>
                                            <td>{trip.vehicle_id}</td>
                                        </tr><bk></bk>
                                        <tr>
                                            <th>User id:</th>
                                            <td>{trip.user_id}</td>
                                        </tr>
                                        </p>
                                    </table>        
                                </div>)}
                        </div>
                                

                        
                        <div className="column">
                            <h1>Current Weather</h1>
                            <div className="weatherforcast">
                                {weather.daily && weather.daily.slice(0, 7).map(d => (
                                    <div>
                                        <img
                                            src={`https://openweathermap.org/img/w/${d.weather[0].icon}.png`}
                                            alt={d.weather[0].main}
                                        />
                                        <div>{d.temp.max} / {d.temp.min}</div>
                                        
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>


                        
        
        </div>
    
        );


    }


const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);