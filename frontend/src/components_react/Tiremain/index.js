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
                    <div className="grid-container">
                        <table>
                            <p id={"rcorners2"}><tr>
                                <th>Make:</th>
                                <th>{vehicle[1].make}</th>
                                </tr><bk></bk>
                                <tr>
                                <th>Model:</th>
                                <th>{vehicle[1].model}</th>
                                </tr><bk></bk>
                                <tr>
                                    <th>Current tire miles:</th>
                                    <td>{vehicle[1].total_miles}</td>
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
                                <tr>
                                    <td>{vehicle.user_id}</td> 
                                </tr>
                                </p>
                        </table>
                    </div>
                </div>)}

        </div>

    );

}


const condition = authUser => !!authUser;


export default withAuthorization(condition)(TireMainPage);
