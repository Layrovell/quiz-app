import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export const Header = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  const logout = () => {
    axios.get("http://localhost:3003/logout").then((response) => {
      localStorage.removeItem("username");
      setUser("");
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3003/login").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <header className="header">
      <Link to="/quiz" className="logo">
        Quiz App
      </Link>

      <ul className="navigation">
        <li className="username">{user}</li>
        <li>
          {user ? (
            <button onClick={logout} className="btn btn-logout">
              Log out
            </button>
          ) : (
            <Link to="/quiz/login/" className="btn btn-login">
              Log In
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
};
