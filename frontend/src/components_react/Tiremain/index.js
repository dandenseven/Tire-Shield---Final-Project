import React, { useContext, useState, useEffect} from 'react';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';

function TireMainPage() {
    const[vehicles, setVehicles] = useState([]);
    // need user id
    const userId = useContext(FirebaseContext).uid
    
    async function getvehicles() {
        const configs = {
            method: 'post',
            data: JSON.stringify({"user_id": userId}),
            headers: {"Content-Type": "application/json"}
        }
        const response = await fetch("http://localhost:5000/vehicle_read");
        const vehicles = await response.json();
        setVehicles(vehicles);

    }



    // useEffect to get data upon component loading
    useEffect (() => getvehicles(), []);





// const TireMainPage = () => 
    return (
        <AuthUserContext.Consumer> 
            {authUser => (
            <div>
                <h2>Tire Milage</h2>
                <h2>Current Tire Miles</h2>
                <h2>Tire Warning Message!</h2>
                {/* vehicles go here 
                vehicles.map(vehicle => <p>{vehicle.miles}</p> */}

            </div>
            )}


        </AuthUserContext.Consumer>

    );


}


const condition = authUser => !!authUser;


export default withAuthorization(condition)(TireMainPage);
