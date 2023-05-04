import React from "react";

type ContactContextObj = {
  login: () => void;
  logout: () => void;
};

const ContactContextManage = React.createContext<ContactContextObj>({
  login: () => {},
  logout: () => {},
});

const ContactContextProvider = (props: any) => {
  const loginHandler = () => {};
  const logoutHandler = () => {};

  const ContactContextValue: ContactContextObj = {
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
