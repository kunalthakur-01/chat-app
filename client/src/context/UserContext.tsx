import React from "react";


const UserContextManage = React.createContext({
  login: () => {},
  logout: () => {},
});

const UserContextProvider = (props: any) => {
  const loginHandler = () => {};
  const logoutHandler = () => {};

  const UserContextValue = {
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <UserContextManage.Provider value={UserContextValue}>
      {props.children}
    </UserContextManage.Provider>
  );
};

export default UserContextProvider;
