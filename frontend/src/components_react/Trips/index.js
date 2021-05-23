import React, { useContext, useState, useEffect} from 'react';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';
import '../../Sass/Components/Rcorners.scss';

function TripsPage() { 
    const[trips, setTrips] = useState([]);

    const userId = useContext(FirebaseContext).auth.currentUser.uid

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

    useEffect (() => getTrips(), []);
    // const test = trips.map(t => <p></p>) 

    return (
        
            
        <div>
        
            {/* <label for="input">Starting Address:</label>
            <input type="text" id="input" name="input"></input>
            <label for="input">Trip Destination:</label>
            <input type="text" id="input" name="input"></input> */}
            {/* {trips} */}
            <p>inputs for trip start destination and end destination</p>
                <p>Trip history</p>
                    <p>Map</p>



            {trips.map(trip => 
                <div>
                    <div className="grid-container">
                        <table>
                            <p id={"rcorners1"}><tr>
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
                    </div>
                </div>)}

        </div>
            
    );


}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(TripsPage);