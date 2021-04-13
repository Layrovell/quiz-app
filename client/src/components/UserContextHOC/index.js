import React, { useState } from 'react';
import UserContext from "../../contexts/UserContext";

export const UserContextHOC = (props) => {
  const [user, setUser] = useState('Guest');

  return (
    <UserContext.Provider value={{ user, setUser }} >
      {props.children}
    </UserContext.Provider>
  )
}
