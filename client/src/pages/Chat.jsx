import React, { useContext, useEffect, useRef, useState } from "react";
import ChatBox from "../component/chat-box/ChatBox";

import openSocket from "socket.io-client";
import { UserContextManage } from "../context/UserContext";
// import { io } from "socket.io-client";

const Chat = () => {
  const ctx = useContext(UserContextManage);
  const socket = useRef();
  const [arrivedMessage, setArrivedMessage] = useState([]);

  useEffect(() => {
    socket.current = openSocket("http://localhost:5000");
    socket.current.emit('add-user', ctx.userData?._id);

    socket.current.emit('add-user', ctx.userData?._id);

    if(socket.current) {
      socket.current.on("msg-sent", (data) => {
        console.log(data);
        setArrivedMessage(prev => {
          if(prev.length) return [...prev, data];
          return [data];
        })
      });
    }
  }, [ socket.current ]);

  return (
    <>
      <ChatBox arrivedMessage={arrivedMessage} />
    </>
  );
};

export default Chat;
