import React, { useContext, useState, useEffect} from 'react';
import { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';


function TripsPage() { 
    const[trips, setTrips] = useState();

    const userId = useContext(FirebaseContext).uid

    async function gettrips() {
        const configs = {
            method: 'post',
            data: JSON.stringify({"user_id": userId}),
            headers: {"Content-Type": "application/json"}
        }
        const response = await fetch("http://localhost:5000/trip_read");
        const trips = await response.json();
        setTrips(trips);
    }

    useEffect (() => gettrips(), []);


    return (
        <AuthUserContext.Consumer> 
            {authUser => (
            <div>
                <label for="input">Starting Address:</label>
                <input type="text" id="input" name="input"></input><br></br>
                <label for="input">Trip Destination:</label>
                <input type="text" id="input" name="input"></input><br></br>
            <section><p>MAP</p></section><bk/>

            </div>
            )}

        </AuthUserContext.Consumer>
    );


}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(TripsPage);