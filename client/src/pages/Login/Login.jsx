import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import axios from "axios";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  axios.defaults.withCredentials = true;
  const login = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3003/login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          console.log(response);
          setLoginStatus(response.data[0].username);
        }
      });
  };

  useEffect(() => {
    axios.get('http://localhost:3003/login').then((response) => {
        if (response.data.loggedIn === true) {
            setLoginStatus(response.data.user);
        }
    });
  }, []);

  return (
    <section className="App">
      <h2>Login</h2>
      <form action="" onSubmit={login}>
        <Input
          action={(e) => setUsername(e.target.value)}
          help="Username..."
          label="Username:"
        />
        <Input
          action={(e) => setPassword(e.target.value)}
          help="Password..."
          label="Password:"
        />
        <button type="submit">Login</button>
      </form>

      <Link to="/quiz/">exit</Link>

      <p>loginStatus:</p>
      <p>{loginStatus}</p>
    </section>
  );
};
