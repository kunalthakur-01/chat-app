import React from "react";

type UserContextObj = {
  login: () => void;
  logout: () => void;
};

const UserContextManage = React.createContext<UserContextObj>({
  login: () => {},
  logout: () => {},
});

const UserContextProvider = (props: any) => {
  const loginHandler = () => {};
  const logoutHandler = () => {};

  const UserContextValue: UserContextObj = {
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
