import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import classes from "./MessageBox.module.scss";
import MessageBoxDetail from "./MessageBoxDetail";
import MessagesArea from "./message-area/MessagesArea";
import SendMessageForm from "./SendMessageForm";
import useHttp from "../../../hooks/http-hook";
import { getMessages } from "../../../api/other-apis/messageApi";
import { UserContextManage } from "../../../context/UserContext";

const MessageBox = () => {
  const getUserByQueryParam = useSearchParams()[0].get("user");
  const ctx = useContext(UserContextManage);

  const { sendRequest, data, error, status } = useHttp(getMessages);

  useEffect(() => {
    if(getUserByQueryParam) {
      sendRequest({user1: ctx.userData?._id, user2: getUserByQueryParam});
    }
  }, [getUserByQueryParam]);

  if (!getUserByQueryParam) {
    return <div className={`${classes.start_conversation_section} box_container`}>
      <h1>Start conversation💫</h1>
    </div>
  }

  if(status === 'pending') {
    return <div style={{display: 'grid', placeContent: 'center'}} className="box_container">
      <h1>Loading...</h1>
    </div>
  }

  // console.log(data)

  return (
    <div className={`${classes.message_box_section} box_container`}>
      <MessageBoxDetail aboutContact={getUserByQueryParam} />
      <hr className={classes.message_box_section_hr} />
      <MessagesArea messages={data?.messageBox.allMessages} />
      <SendMessageForm />
    </div>
  );
};

export default MessageBox;
