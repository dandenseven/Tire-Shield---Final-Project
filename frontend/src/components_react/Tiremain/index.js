import React, { useContext, useState, useEffect} from 'react';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';

function TireMainPage() {
    const[vehicles, setVehicles] = useState([]);
    // need user id
    const userId = useContext(FirebaseContext).uid
    
    async function getVehicles() {
        const configs = {
            method: 'post',
            data: JSON.stringify({"user_id": userId}),
            headers: {"Content-Type": "application/json"}
        }
        const response = await fetch("http://localhost:5000/api/users_vehicle", configs);
        const vehicles = await response.json();
        setVehicles(vehicles);

    }

    // const[update_vehicles, setUpdateVehicles] = useState([]);

    // async function getUpdateVehicles() {
    //     const configs = {
    //         method: 'post',
    //         data: JSON.stringify({"user_id": userId}),
    //         headers: {"Content-Type": "application/json"}
    //     }
    //     const response = await fetch("http://localhost:5000/api/update_vehicle", configs);
    //     const update_vehicles = await response.json();
    //     setUpdateVehicles(update_vehicles);

    // }


    // useEffect to get data upon component loading
    useEffect (() => getVehicles(), []);

    // useEffect (() => getUpdateVehicles(), []);


// const TireMainPage = () => 
    return (
        
        <div>
            <h2>Tire Milage</h2>
            <h2>Current Tire Miles</h2>
            <h2>Tire Warning Message!</h2>
            {vehicles.map(vehicle => {
                <div>
                    <p>{vehicle.make}</p>
                    <p>{vehicle.model}</p>
                    <p>{vehicle.total_miles}</p>
                    <p>{vehicle.tire_miles}</p>
                    <p>{vehicle.tire_purchase_date}</p>
                    <p>{vehicle.rotation_miles}</p>
                    <p>{vehicle.color}</p>
                    <p>{vehicle.user_id}</p>
                </div>
            })}
        </div>

    );

}


const condition = authUser => !!authUser;


export default withAuthorization(condition)(TireMainPage);
