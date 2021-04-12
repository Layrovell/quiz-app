import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";

export const Score = ({ questions, score }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3003/login").then((response) => {
      console.log(response.data.user);
      if (response.data.loggedIn === true) {
        setUser(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Score</title>
      </Helmet>
      <h2>Congradulations, {user ? user : "User"}!</h2>

      <div className="score-container">
        <p>Total questions: {questions.length}</p>
        <p>Correct answers: {score}</p>
        <p>Wrong answers: {questions.length - score}</p>
      </div>

      <Link to="/quiz/" className="btn btn-exit">
        exit
      </Link>
    </div>
  );
};
