import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';

function AddTrip() {
    const[start, setStart] = useState("");
    const[destination, setDestination] = useState("");
    const[distance, setDistance] = useState("");
    const[weather, setWeather] = useState("");
    const[vehicle_id, setVehicleId] = useState("");
    const[success, setSuccess] = useState(true)



    // need user id
    const userId = useContext(FirebaseContext).auth.currentUser.uid
    
    async function addTrip() {
        const body = JSON.stringify({
            start_add: start, 
            destination_add: destination,
            distance: distance,
            weather: weather,
            vehicle_id: vehicle_id,
            user_id: userId,
            
        })
        const configs = {
            method: 'post',
            body: body,
            headers: {"Content-Type": "application/json"}
        }
        const response = await fetch("http://localhost:5000/api/trip_add", configs);
        const success = await response.json();
        setSuccess(success.status);

    }

    return (
        
        <div>
            <h2>Add a New Trip</h2>
            <input 
            type="text" 
            placeholder="Starting Destination" 
            onChange={e => setStart(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Destination" 
            onChange={e => setDestination(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Distance" 
            onChange={e => setDistance(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Weather" 
            onChange={e => setWeather(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Vehicle Identity" 
            onChange={e => setVehicleId(e.target.value)}
            />
            <button type="button" onClick={addTrip}>
                submit
            </button>
        </div>

        


    );

}


const condition = authUser => !!authUser;


export default withAuthorization(condition)(AddTrip);


