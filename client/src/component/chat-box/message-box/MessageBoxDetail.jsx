import React, { useContext } from "react";

import classes from "./MessageBoxDetail.module.scss";

import { IoCallSharp } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { UserContextManage } from "../../../context/UserContext";

const MessageBoxDetail = (props) => {
  const ctx = useContext(UserContextManage);
  const contactDetails = ctx.userData?.contacts.find(contact => contact._id === props.aboutContact);
  return (
    <div className={classes.MessageBoxDetail_section}>
      <div className={classes.about_contact_section}>
        <img
          src="https://i.pinimg.com/originals/23/c1/03/23c103fcf8312f7b905c42fe421caf5f.jpg"
          alt="contact"
        />
        <div className={classes.about_detail}>
          <h3>{contactDetails?.name}</h3>
          <p>Online</p>
        </div>
      </div>
      <div className={classes.others_features}>
        <span><IoCallSharp /></span>
        <span><IoVideocam /></span>
        <span><SlOptionsVertical /></span>
      </div>
    </div>
  );
};

export default MessageBoxDetail;
