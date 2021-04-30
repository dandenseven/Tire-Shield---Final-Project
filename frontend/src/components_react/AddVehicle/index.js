import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';

function AddVehicle() {
    const[make, setMake] = useState("");
    const[model, setModel] = useState("");
    const[total_miles, setMiles] = useState("");
    const[tire_miles, setTireMiles] = useState("");
    const[color, setColor] = useState("");
    const[vehicle_id, setVehicleId] = useState("");

    const[sucess, setSuccess] = useState(true);


    // need user id
    const userId = useContext(FirebaseContext).auth.currentUser.uid
    
    async function addVehicle() {
        const body = JSON.stringify({
            make: make,
            model: model,
            total_miles: total_miles,
            tire_miles: tire_miles,
            user_id: userId,
            color: color
    
        })
        console.log(body)
        const configs = {
            method: 'post',
            body: body,
            headers: {"Content-Type": "application/json"}
        }
        const response = await fetch("http://localhost:5000/api/vehicle_add", configs);
        const success = await response.json();
        setSuccess(success.status);

    }

    return (
        
        <div>
            <h2>Add a New Vehicle</h2>
            <input 
            type="text" 
            placeholder="Make" 
            onChange={e => setMake(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Model" 
            onChange={e => setModel(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Current Mileage" 
            onChange={e => setMiles(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Tire Mileage" 
            onChange={e => setTireMiles(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Color" 
            onChange={e => setColor(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Vehicle Nickname" 
            onChange={e => setVehicleId(e.target.value)}
            />
            <button type="button" onClick={addVehicle}>
                submit
            </button>
        </div>


    );

}


const condition = authUser => !!authUser;


export default withAuthorization(condition)(AddVehicle);


