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

    const[update_vehicles, setUpdateVehicles] = useState([]);

    async function getUpdateVehicles() {
        const configs = {
            method: 'post',
            data: JSON.stringify({"user_id": userId}),
            headers: {"Content-Type": "application/json"}
        }
        const response = await fetch("http://localhost:5000/api/update_vehicle", configs);
        const update_vehicles = await response.json();
        setUpdateVehicles(update_vehicles);

    }


    // useEffect to get data upon component loading
    useEffect (() => getVehicles(), []);



    useEffect (() => getUpdateVehicles(), []);


// const TireMainPage = () => 
    return (
        <AuthUserContext.Consumer> 
            {authUser => (
            <div>
                <h2>Tire Milage</h2>
                <h2>Current Tire Miles</h2>
                <h2>Tire Warning Message!</h2>
                <button onClick={() => setVehicles(getVehicles)}>Enter Miles</button>
                <button onClick={() => setUpdateVehicles(getUpdateVehicles)}>Update Miles</button>

            </div>
            )}
        </AuthUserContext.Consumer>
    );

}


const condition = authUser => !!authUser;


export default withAuthorization(condition)(TireMainPage);
