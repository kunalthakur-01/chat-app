import React from "react";

import classes from "./ChatBox.module.scss";

import logo from "../../assets/logo.svg";
import { FaBeer } from "react-icons/fa";

const ChatBox: React.FC = () => {
  return (
    <section className={classes.chatbox_section}>
      <div className={`${classes.admin_panel} box_container`}>
        <div className={classes.app_logo}>
          <img src={logo} alt="my-logo" />
          <h2>SNAPPY</h2>
        </div>
        <hr />
        
      </div>
      <div className={`${classes.all_messages} box_container`}></div>
      <div className={`${classes.message_box} box_container`}></div>
    </section>
  );
};

export default ChatBox;
