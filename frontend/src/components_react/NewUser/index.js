import React, { useContext, useState, useEffect } from 'react';



function Newuser() {
    const[newUser, setNewUser] = useState("");

    async function getNewUser() {
        const configs = {
            method: 'post',
            body: JSON.stringify({
            "username": username,
            "email": email,
            "user_id": user_id
            }),
            headers: {"Content_Type": "application/json"}
            
        }
        const response = await fetch("http://localhost:5000/api/users_add", configs)
        const userNew = await response.json();
        console.log(userNew)
        setNewUser(userNew);
    }

        return jsonify({"username": username, "email": email, "user_id": user_id})
}
