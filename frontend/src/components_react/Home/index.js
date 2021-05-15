import React, { useContext, useState, useEffect} from 'react';
import { FirebaseContext } from '../Firebase';

import { withAuthorization } from '../Session';

function HomePage() {
    const[vehicles, setVehicles] = useState([]);

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

    useEffect (() => getVehicles(), []);



    
    return (
        
        <div>
            <h1>Home Page</h1>

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

export default withAuthorization(condition)(HomePage);