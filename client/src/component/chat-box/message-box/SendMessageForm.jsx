import React, { useContext, useState } from "react";

import classes from "./SendMessageForm.module.scss";

import { IoSendSharp } from "react-icons/io5";
import useHttp from "../../../hooks/http-hook";
import { sendMessage } from "../../../api/other-apis/messageApi";
import { UserContextManage } from "../../../context/UserContext";
import { useSearchParams } from "react-router-dom";

const SendMessageForm = (props) => {
  const { sendRequest, data, error, status } = useHttp(sendMessage);
  const getUserByQueryParam = useSearchParams()[0].get("user");
  const [message, setMessage] = useState();
  const ctx = useContext(UserContextManage);

  const SendMessageForm = (e) => {
    e.preventDefault();
    message && sendRequest({senderId: ctx.userData._id, receiverId: getUserByQueryParam, message, time: new Date().toISOString()});

    setMessage("");
  }

  return (
    <form onSubmit={SendMessageForm} className={classes.send_message_form}>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={1} type="text" placeholder="Write a message" />
      <button type="submit">
        <IoSendSharp />
      </button>
    </form>
  );
};

export default SendMessageForm;
