import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';

function TireMainPage() {
    const[vehicles, setVehicles] = useState([]);
    // need user id
    const userId = useContext(FirebaseContext).auth.currentUser.uid
    
    async function getVehicles() {
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



    // useEffect to get data upon component loading
    useEffect (() => getVehicles(), []);

    // useEffect (() => getUpdateVehicles(), []);


// const TireMainPage = () => 
    return (
        
        <div>
            <h2>Tire Milage</h2>
            <h2>Current Tire Miles</h2>
            <h2>Tire Warning Message!</h2>
                <p>expected tire rotation miles</p>
                    <p>expected oil change date</p>
                    

            {vehicles.map(vehicle => 
                <div>
                    <p>{vehicle.make}</p>
                    <p>{vehicle.model}</p>
                    <p>{vehicle.total_miles}</p>
                    <p>{vehicle.tire_miles}</p>
                    <p>{vehicle.tire_purchase_date}</p>
                    <p>{vehicle.rotation_miles}</p>
                    <p>{vehicle.color}</p>
                    <p>{vehicle.user_id}</p>
                </div>)}

        </div>

    );

}


const condition = authUser => !!authUser;


export default withAuthorization(condition)(TireMainPage);
