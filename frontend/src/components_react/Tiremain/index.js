import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';
import '../../Sass/Components/Rcorners.scss';


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
            <h2>My Vehicles</h2>
            <h3>Tire Warning Message!</h3>
                <p>expected oil change date</p>
                    <p>expected tire change date</p>


            {vehicles.map(vehicle => 
                <div>
                    <table>
                        <p id={"rcorners2"}><tr>
                            <th>{vehicle.make}</th><bk></bk>
                            <th>{vehicle.model}</th>
                            </tr><bk></bk>
                            <tr>
                                <th>Current tire miles:</th>
                                <td>{vehicle.total_miles}</td>
                                </tr><bk></bk>
                            <tr>
                                <th>Tire miles:</th> 
                                <td>{vehicle.tire_miles}</td>
                                </tr><bk></bk>
                            <tr>
                                <th>Tire purchased date:</th> 
                                <td>{vehicle.tire_purchase_date}</td>
                            </tr><bk></bk>
                            <tr>
                                <th>Miles until rotation:</th> 
                                <td>{vehicle.rotation_miles}</td>
                            </tr><bk></bk>
                            <tr>
                                <th>Color:</th> 
                                <td>{vehicle.color}</td>
                            </tr><bk></bk>
                            {vehicle.user_id}</p>
                    </table>
                </div>)}

        </div>

    );

}


const condition = authUser => !!authUser;


export default withAuthorization(condition)(TireMainPage);
