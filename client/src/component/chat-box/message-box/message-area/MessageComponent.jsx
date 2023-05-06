import React from "react";

import classes from "./MessageComponent.module.scss";

const MessageComponent = () => {
  return (
    <div>
      <div className={`${classes.message} ${classes.left}`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          aspernatur quae aperiam rem illo non?
        </p>
        <span>9:40 PM</span>
      </div>
    </div>
  );
};

export default MessageComponent;
