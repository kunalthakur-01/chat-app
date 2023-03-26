import React from "react";

import classes from "./MessageBox.module.scss";
import MessageBoxDetail from "./MessageBoxDetail";

const MessageBox = () => {
  return (
    <div className={`${classes.message_box_section} box_container`}>
      <MessageBoxDetail />
      <hr className={classes.message_box_section_hr} />
    </div>
  );
};

export default MessageBox;
