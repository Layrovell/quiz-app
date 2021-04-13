import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const { setUser } = useContext(UserContext);

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
          console.log(response.data);
          setLoginStatus(response.data.message);
        } else {
          console.log(response.data[0]);
          setLoginStatus(response.data[0].username);
          setUser(response.data[0].username);
        }
      });

      props.history.goBack();
  };

  return (
    <section className="container">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h2 className="title">Login</h2>
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
        <div className="button-container">
          <button type="submit" className="btn btn-login">
            Login
          </button>
          <Link to="/quiz/" className="btn btn-prev">
            Back
          </Link>
        </div>
      </form>

      <p className="error">{loginStatus}</p>
    </section>
  );
};
