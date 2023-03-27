import React from "react";

import classes from "./MessageBox.module.scss";
import MessageBoxDetail from "./MessageBoxDetail";
import MessagesArea from "./message-area/MessagesArea";
import SendMessageForm from "./SendMessageForm";

const MessageBox = () => {
  return (
    <div className={`${classes.message_box_section} box_container`}>
      <MessageBoxDetail />
      <hr className={classes.message_box_section_hr} />
      <MessagesArea />
      <SendMessageForm />
    </div>
  );
};

export default MessageBox;
