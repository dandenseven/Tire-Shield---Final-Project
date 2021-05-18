import React, { useContext, useState, useEffect} from 'react';
import { FirebaseContext } from '../Firebase';
import './home.css';
import '../../Sass/Components/Rcorners.scss';
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
        const vehicles = await response.json();
        console.log(vehicles)
        setVehicles(vehicles);
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



    useEffect (() => getVehicles(), []);

    useEffect (() => getTrips(), []);

    
    return (
        
        <div>
            <h1 className="pageheader">Dashboard</h1>

                <p>The Home Page is accessible by every signed in user.</p>
                    <p>show last vehicle used</p>
                        <p>show most recent trip</p>
                            <p>show current miles</p>
                                <p>show weather snapshot</p>
                                    <p> show last login</p>
                                        <p>show tire status</p>
                                            <p>show tire rotation expected date</p>
                                                <p>show oil change expected date</p>



            {vehicles.map(vehicle => 
                <div>
                    <table>
                        <p id={"rcorners2"}><tr>
                            <th>{vehicle.make}</th><bk></bk>
                            <th>{vehicle.model}</th>
                            </tr><bk></bk>
                            <tr>
                                <th>Current tire miles:</th>
                                <td>{vehicle.total_miles}</td>
                                </tr><bk></bk>
                            <tr>
                                <th>Tire miles:</th> 
                                <td>{vehicle.tire_miles}</td>
                                </tr><bk></bk>
                            <tr>
                                <th>Tire purchased date:</th> 
                                <td>{vehicle.tire_purchase_date}</td>
                            </tr><bk></bk>
                            <tr>
                                <th>Miles until rotation:</th> 
                                <td>{vehicle.rotation_miles}</td>
                            </tr><bk></bk>
                            <tr>
                                <th>Color:</th> 
                                <td>{vehicle.color}</td>
                            </tr><bk></bk>
                            {vehicle.user_id}</p>
                    </table>
                </div>)}

            
            {trips.map(trip => 
                <div>
                    <table>
                        <p id={"rcorners1"}><tr>
                            <th>{trip.destination_add}</th><bk></bk>
                            </tr><bk></bk>
                            <tr>
                                <td>{trip.start_add}</td>
                            </tr><bk></bk>
                            <tr>
                                <td>{trip.distance}</td>
                            </tr><bk></bk>
                            <tr>
                                <td>{trip.weather}</td>
                            </tr><bk></bk>
                            {trip.vehicle_id}
                            {trip.user_id}</p>
                    </table>        
                </div>)}

        </div>
    
    );


}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);