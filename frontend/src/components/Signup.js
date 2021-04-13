import React, { useState } from 'react';
// import Login from './components/Login';

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [createUserName, setCreateUsername] = useState("");
    const [createPassword, setCreatePassword] = useState("");


    function firstNameChangeHandler(e) {
        setFirstName(e.target.value)
    }

    function lastNameChangeHandler(e) {
        setLastName(e.target.value)
    }

    function emailChangeHandler(e) {
        setEmail(e.target.value)
    }

    function userNameChangeHandler(e) {
        setCreateUsername(e.target.value)
    }

    function passwordChangeHandler(e) {
        setCreatePassword(e.target.value)
    }

    const sendSignin = async () => {
        const newUserData = JSON.stringify({
            firstname: firstName,
            lastname: lastName,
            email: email,
            username: createUserName,
            password: createPassword
        })
        const config = {
            method: "POST",
            headers: {"Content_Type": "application/json"},
            body: newUserData

        }
        const response = await fetch("http://localhost:8080/api/Login");
        const data = await response.json()
        console.log(data); 

        }
        
    

    return (
        <div>
        <input type="first name" onClick={firstNameChangeHandler}/><br/>
        <input type="last name" onClick={lastNameChangeHandler}/><br/>
        <input type="email" onClick={emailChangeHandler}/><br/>
        <input type="create username" onClick={userNameChangeHandler}/><br/>
        <input type="create password" onClick={passwordChangeHandler}/><br/>
        <button onClick={sendSignin}>Submit</button><bk/>
        </div>
        )
}

