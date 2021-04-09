/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import axios from "axios";

export const Registration = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  axios.defaults.withCredentials = true;
  const register = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3003/register", {
        username: usernameReg,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <section className="App">
      <h2>Registration</h2>
      <form action="" onSubmit={register}>
        <Input
          action={(e) => setUsernameReg(e.target.value)}
          label="Username:"
        />
        <Input
          action={(e) => setPasswordReg(e.target.value)}
          label="Password:"
        />
        <button type="submit">Register</button>
      </form>

      <Link to="/quiz/">exit</Link>
    </section>
  );
};
