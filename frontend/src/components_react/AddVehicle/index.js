import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';

function AddVehicle() {
    const[make, setMake] = useState("");
    const[model, setModel] = useState("");
    const[vehicle_miles, setVehicleMiles] = useState("");
    const[tire_miles, setTireMiles] = useState("");
    const[tire_purchase_date, setTirePurchaseDate] = useState("");
    const[rotation_miles, setRotationMiles] = useState("");
    const[warranty_miles, setWarrantyMiles] = useState("");
    const[color, setColor] = useState("");
    const[vehicle_id, setVehicleId] = useState("");

    const[sucess, setSuccess] = useState(true);


    // need user id
    const userId = useContext(FirebaseContext).auth.currentUser.uid
    
    async function addVehicle() {
        const body = JSON.stringify({
            make: make,
            model: model,
            vehicle_miles: vehicle_miles,
            tire_miles: tire_miles,
            tire_purchase_date: new Date(tire_purchase_date).getTime(),
            rotation_miles: rotation_miles,
            warranty_miles: warranty_miles,
            color: color,
            user_id: userId,
            vehicle_id: vehicle_id
            
    
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
            onChange={e => setVehicleMiles(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Tire Miles" 
            onChange={e => setTireMiles(e.target.value)}
            />
            
            <input 
            type="date" 
            placeholder="Tire Purchase Date" 
            onChange={e => setTirePurchaseDate(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Tire Rotation Miles" 
            onChange={e => setRotationMiles(e.target.value)}
            />
            <input
            type="text"
            placeholder="Tire Warranty Miles"
            onChange={e => setWarrantyMiles(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Color" 
            onChange={e => setColor(e.target.value)}
            />
            {/* <input 
            type="text" 
            placeholder="Vehicle Nickname" 
            onChange={e => setVehicleId(e.target.value)}
            /> */}
            <button type="button" onClick={addVehicle}>
                submit
            </button>
        </div>


    );

}


const condition = authUser => !!authUser;


export default withAuthorization(condition)(AddVehicle);


