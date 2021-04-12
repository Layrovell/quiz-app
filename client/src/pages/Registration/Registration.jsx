import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import axios from "axios";

export const Registration = (props) => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  console.log(props);

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

      props.history.goBack();
  };

  return (
    <section className="container">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <h2 className="title">Registration</h2>
      <form action="" onSubmit={register}>
        <Input
          action={(e) => setUsernameReg(e.target.value)}
          label="Username:"
        />
        <Input
          action={(e) => setPasswordReg(e.target.value)}
          label="Password:"
        />
        <div className="button-container">
          <button type="submit" className="btn btn-register">
            Register
          </button>
          <Link to="/quiz/" className="btn btn-prev">
            Back
          </Link>
        </div>
      </form>
    </section>
  );
};
