import React from "react";

import classes from "./ChatBox.module.scss";

import AdminPanel from "./admin-panel/AdminPanel";
import AllContacts from "./all-contact/AllContacts";
import MessageBox from "./message-box/MessageBox";

const ChatBox = ({arrivedMessage}) => {
  return (
    <section className={classes.chatbox_section}>
      <AdminPanel />
      <AllContacts arrivedMessage={arrivedMessage} />
      <MessageBox arrivedMessage={arrivedMessage} />
    </section>
  );
};

export default ChatBox;
