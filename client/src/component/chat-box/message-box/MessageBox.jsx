import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import classes from "./MessageBox.module.scss";
import MessageBoxDetail from "./MessageBoxDetail";
import MessagesArea from "./message-area/MessagesArea";
import SendMessageForm from "./SendMessageForm";

const MessageBox = () => {
  const getUserByQueryParam = useSearchParams()[0].get("user");
  const navigate = useNavigate()
  console.log(navigate)

  if (!getUserByQueryParam) {
    return <div className={`${classes.start_conversation_section} box_container`}>
      <h1>Start conversation💫</h1>
    </div>;
  }
  // else navigate('/', {replace: true})

  

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
