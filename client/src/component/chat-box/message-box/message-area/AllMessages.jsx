import React from "react";

import classes from "./AllMessages.module.scss";
import { useSearchParams } from "react-router-dom";

const AllMessages = ({ messages }) => {
  // console.log(messages);
  const getUserByQueryParam = useSearchParams()[0].get("user");
  return (
    <div className={classes.allMessages}>
      {messages?.map((message) => (
        <div
          key={message._id}
          className={`${classes.message} ${
            message.userId === getUserByQueryParam
              ? classes.left
              : classes.right
          }`}
        >
          <p>{message.message}</p>
          <span>
            {new Date(message.time).getHours()}:
            {new Date(message.time).getMinutes()}{" "}
            {new Date(message.time).getHours() > 12 ? "PM" : "AM"}
          </span>
        </div>
      ))}
      {/* <div className={`${classes.message} ${classes.left}`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          aspernatur quae aperiam rem illo non?
        </p>
        <span>9:40 PM</span>
      </div>
      <div className={`${classes.message} ${classes.right}`}>
        <p>kidaa</p>
        <span>9:40 PM</span>
      </div>
      <div className={`${classes.message} ${classes.right}`}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          fuga!
        </p>
        <span>9:40 PM</span>
      </div>
      <div className={`${classes.message} ${classes.left}`}>
        <p>hello world ha bol li krda.. m bs betha hoya h si vehla</p>
        <span>9:40 PM</span>
      </div>
      <div className={`${classes.message} ${classes.left}`}>
        <p>
          hello world Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur, eveniet.
        </p>
        <span>9:40 PM</span>
      </div>
      <div className={`${classes.message} ${classes.left}`}>
        <p>bs vdia</p>
        <span>9:40 PM</span>
      </div> */}
    </div>
  );
};

export default AllMessages;
