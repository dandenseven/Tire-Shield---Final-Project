import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';
import '../../Sass/Components/Rcorners.scss';
import './vehicle.css';

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

    async function getReset(vehicle_id) {
        const configs = {
            method: 'post',
            body: JSON.stringify({"id": vehicle_id}),
            headers: {"Content-Type": "application/json"}
        }
        const response = await fetch("http://localhost:5000/api/update_vehicle", configs);
        const success = await response.json();
        getVehicles()
        console.log(success);
    }
    
    async function getResetRotation(vehicle_id) {
        const configs = {
            method: 'post',
            body: JSON.stringify({"id": vehicle_id}),
            headers: {"Content-Type": "application/json"}
        }
        const response = await fetch("http://localhost:5000/api/update_rotation", configs);
        const success =await response.json();
        getVehicles()
        console.log(success);
    }

    // useEffect to get data upon component loading
    useEffect (() => getVehicles(), []);

    // useEffect (() => getUpdateVehicles(), []);


// const TireMainPage = () => 
    return (
        
        <div>
            <h2>My Vehicles</h2>
            <h3>Tire Warning Message!</h3>
                <p>expected oil change date</p>
                    <p>expected tire change date</p>



            <div className="row">
                <div className="column">
                    <div id={"rcorners5"}>
                        {vehicles.map(vehicle => 
                            <div>
                                <div className="grid-container">
                                    <table>
                                        <p id={"rcorners7"}><tr>
                                            <th>Make:</th>
                                            <th>{vehicle[1].make}</th>
                                            </tr><bk></bk>
                                            <tr>
                                            <th>Model:</th>
                                            <th>{vehicle[1].model}</th>
                                            </tr><bk></bk>
                                            <tr>
                                                <th>Vehicle miles:</th>
                                                <td>{vehicle[1].vehicle_miles}</td>
                                                </tr><bk></bk>
                                            <tr>
                                                <th>Tire miles:</th> 
                                                <td>{vehicle[1].tire_miles}</td>
                                                </tr><bk></bk>
                                            <tr>
                                                <th>Tire purchased date:</th> 
                                                <td>{vehicle[1].tire_purchase_date}</td>
                                            </tr><bk></bk>
                                            <tr>
                                                <th>Miles until rotation:</th> 
                                                <td>{vehicle[1].rotation_miles}</td>
                                            </tr><bk></bk>
                                            <tr>
                                                <th>Color:</th> 
                                                <td>{vehicle[1].color}</td>
                                            </tr><bk></bk>
                                            
                                            </p>
                                    </table>
                                    <button onClick={e => getReset(vehicle[0])}>Tire Change</button>
                                    <button onClick={e => getResetRotation(vehicle[0])}>Rotate Tires</button>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>

    );

}


const condition = authUser => !!authUser;


export default withAuthorization(condition)(TireMainPage);
