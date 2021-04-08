/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

export const Registration = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    axios.defaults.withCredentials = true;
    const register = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3003/register", {
          username: usernameReg,
          password: passwordReg,
        }, 
        {
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then((response) => {
          console.log(response);
        });
      };
    
      const login = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3003/login", {
          username: username,
          password: password,
        }).then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            console.log(response.data);
            // setLoginStatus(response.data[0].username);
          }
        });
      };

    return (
        <section className="App">
            <h2>Registration</h2>

            <form action="" onSubmit={register}>
                <label htmlFor='username'>Username</label>
                <input
                    value={usernameReg}
                    type="text"
                    onChange={(e) => setUsernameReg(e.target.value)}
                    id='username'
                />

                <div className='centered'>
                    <label htmlFor='password'>Password</label>
                    <button type="button" className="show-hide">show</button>
                </div>
                <input
                    value={passwordReg}
                    type="text"
                    onChange={(e) => setPasswordReg(e.target.value)}
                    id='password'
                />

                <button type='submit'>Register</button>
            </form>

            <h2>Login</h2>

            <form action=""  onSubmit={login}>
                <label htmlFor='username'>Username</label>
                <input
                    value={username}
                    placeholder="Username..."
                    onChange={(e) => setUsername(e.target.value)}
                    id='username'
                />

                <div className='centered'>
                    <label htmlFor='password'>Password</label>
                </div>
                <input
                    value={password}
                    type="text"
                    placeholder="Password..."
                    onChange={(e) => setPassword(e.target.value)}
                    id='password'
                />

                <button type='submit'>Login</button>
            </form>

            <Link to='/quiz/'>exit</Link>

            <hr/>
            <p>loginStatus:</p>
            <p>{loginStatus}</p>
        </section>
    );
};

