import React, { useState } from 'react';
import UserContext from "../../contexts/UserContext";

export const UserContextHOC = (props) => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }} >
      {props.children}
    </UserContext.Provider>
  )
}
