import React, { useContext, useState, useEffect} from 'react';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';

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
        const trips = await response.json();
        console.log(trips)
        setTrips(trips);
    }

    useEffect (() => getTrips(), []);


    return (
        
            
        <div>
            <label for="input">Starting Address:</label>
            <input type="text" id="input" name="input"></input><br></br>
            <label for="input">Trip Destination:</label>
            <input type="text" id="input" name="input"></input><br></br>
            {trips.map(trip => {
                <div>
                    <p>{trip.destination_add}</p>
                    <p>{trip.start_add}</p>
                    <p>{trip.distance}</p>
                    <p>{trip.weather}</p>
                    <p>{trip.vehicle_id}</p>
                    <p>{trip.user_id}</p>
                </div>
            })}

        </div>
            
    );


}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(TripsPage);