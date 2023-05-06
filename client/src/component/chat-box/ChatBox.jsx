import React from "react";

import classes from "./ChatBox.module.scss";

import { FaBeer } from "react-icons/fa";
import AdminPanel from "./admin-panel/AdminPanel";
import AllContacts from "./all-contact/AllContacts";
import MessageBox from "./message-box/MessageBox";

const ChatBox = () => {
  return (
    <section className={classes.chatbox_section}>
      <AdminPanel />
      <AllContacts />
      <MessageBox />
    </section>
  );
};

export default ChatBox;
