import React, { useEffect } from "react";
import ChatBox from "../component/chat-box/ChatBox";

import openSocket from "socket.io-client";

const Chat = () => {
  useEffect(() => {
    openSocket("http://localhost:5000");
  }, []);
  return (
    <>
      <ChatBox />
    </>
  );
};

export default Chat;
