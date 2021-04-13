import React, { useState, useEffect } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export const UserContextHOC = (props) => {
  const [user, setUser] = useState("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    console.log("check");
    axios.get("http://localhost:3003/login").then((response) => {
      console.log(response.data);
      if (!response.data.loggedIn) {
        console.log("not logged");
      } else {
        console.warn(response.data);
        setUser(response.data.user[0].username);
      }
    });
  }, [user, setUser]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
