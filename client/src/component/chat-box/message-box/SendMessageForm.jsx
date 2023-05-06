import React from "react";

import classes from "./SendMessageForm.module.scss";

import { IoSendSharp } from "react-icons/io5";

const SendMessageForm = () => {
  return (
    <form className={classes.send_message_form}>
      <input type="text" placeholder="Write a message" />
      <button>
        <IoSendSharp />
      </button>
    </form>
  );
};

export default SendMessageForm;
