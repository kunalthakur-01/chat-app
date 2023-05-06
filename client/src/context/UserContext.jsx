import React, { useState } from "react";


export const UserContextManage = React.createContext({
  token: null,
  userData: {},
  login: () => {},
  logout: () => {},
});

export const UserContextProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState(null);
  console.log(userData)

  const loginHandler = (data, token) => {
    setUserData(data);
    setToken(token);
  };
  const logoutHandler = () => {
    setUserData({});
    setToken(null);
  };

  const UserContextValue = {
    userData,
    token,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <UserContextManage.Provider value={UserContextValue}>
      {props.children}
    </UserContextManage.Provider>
  );
};