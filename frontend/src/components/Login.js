import React, { useState } from 'react';

export default function Login({ loginFunc }) {
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");


    function usernameChangeHandler(e) {
        setInputUsername(e.target.value)
    }

    function passwordChangeHandler(e) {
        setInputPassword(e.target.value)
    }


    const sendLogin = async () => {
        const userData = JSON.stringify({
            username: inputUsername,
            password: inputPassword
        })
        const config = {
            method: "POST",
            headers: {"Content_Type": "application/json"},
            body: userData

        }
        const response = await fetch("http://localhost:8080/api/Login");
        const data = await response.json()
        console.log(data); 
    }

     return (
        <div>
          <h3>Login</h3>
          <p>username</p><input type="username" onClick={usernameChangeHandler}/><br/>
          <p>password</p><input type="password" onClick={passwordChangeHandler}/><br/>
          <button onClick={sendLogin}>Login</button><bk/>
          
        </div>
    )
}