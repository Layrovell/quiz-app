import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Header = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3003/login").then((response) => {
      if (response.data.loggedIn === true) {
        setUser(response.data.user[0].username);
      }
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("auth");

    axios.get("http://localhost:3003/logout").then((response) => {
      console.log(response.data);
    });
  };

  return (
    <header className="header">
      <Link to='/quiz' className="logo">Quiz App</Link>

      <ul className="navigation">
        <li className='username'>User: {user} - {user}</li>
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
