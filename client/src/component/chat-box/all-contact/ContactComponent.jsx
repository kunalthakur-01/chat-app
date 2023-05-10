import React from "react";

import classes from "./ContactComponent.module.scss";
import { Link, useNavigate } from "react-router-dom";

const ContactComponent= (props) => {
  const {name, _id: userId} = props.contact;
  const navigate = useNavigate();

  const openChatBtnHandler = () => {
    navigate(`/chat/?user=${userId}`, {replace: true});
  }
  return (
    <li onClick={openChatBtnHandler} className={classes.Contact_component}>
      <div className={classes.contact_detail_section}>
        <img
          src="https://i.pinimg.com/originals/23/c1/03/23c103fcf8312f7b905c42fe421caf5f.jpg"
          alt="contact"
        />
        <div className={classes.contact_detail}>
          <h3>{name}</h3>
          <p>hello bro</p>
        </div>
      </div>
      <div className={classes.message_status}>
        <time>12:30 AM</time>
        <span>2</span>
      </div>
    </li>
  );
};

export default ContactComponent;
