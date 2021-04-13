import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export const Header = () => {
  const { user } = useContext(UserContext);

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
          {user !== 'Guest' ? (
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
