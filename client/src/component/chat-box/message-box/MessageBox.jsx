import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import classes from "./MessageBox.module.scss";
import MessageBoxDetail from "./MessageBoxDetail";
import MessagesArea from "./message-area/MessagesArea";
import SendMessageForm from "./SendMessageForm";
import useHttp from "../../../hooks/http-hook";
import { getMessages } from "../../../api/other-apis/messageApi";
import { UserContextManage } from "../../../context/UserContext";

const MessageBox = ({arrivedMessage}) => {
  const getUserByQueryParam = useSearchParams()[0].get("user");
  const ctx = useContext(UserContextManage);

  const { sendRequest, data, error, status } = useHttp(getMessages);
  const [ allMessages, setAllMessages ] = useState([]);

  useEffect(() => {
    if (getUserByQueryParam) {
      sendRequest({ user1: ctx.userData?._id, user2: getUserByQueryParam });
    }
  }, [getUserByQueryParam]);

  useEffect(() => {
    if(data && !error) setAllMessages(data.messageBox.allMessages);
  }, [ data, error ]);

  useEffect(() => {
    setAllMessages(prev => {
      return [...prev, ...arrivedMessage]
    })
  }, [ arrivedMessage ]);

  if (!getUserByQueryParam) {
    return (
      <div className={`${classes.start_conversation_section} box_container`}>
        <h1>Start conversation💫</h1>
      </div>
    );
  }

  if (status === "pending") {
    return (
      <div
        style={{ display: "grid", placeContent: "center" }}
        className="box_container"
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  console.log(arrivedMessage)

  return (
    <div className={`${classes.message_box_section} box_container`}>
      <MessageBoxDetail aboutContact={getUserByQueryParam} />
      <hr className={classes.message_box_section_hr} />
      <MessagesArea messages={allMessages} />
      <SendMessageForm />
    </div>
  );
};

export default MessageBox;
