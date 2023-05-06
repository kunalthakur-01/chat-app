import React from "react";

const ContactContextManage = React.createContext({
  login: () => {},
  logout: () => {},
});

const ContactContextProvider = (props) => {
  const loginHandler = () => {};
  const logoutHandler = () => {};

  const ContactContextValue = {
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <ContactContextManage.Provider value={ContactContextValue}>
      {props.children}
    </ContactContextManage.Provider>
  );
};

export default ContactContextProvider;
