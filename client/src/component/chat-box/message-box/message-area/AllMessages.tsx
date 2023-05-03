import React from "react";

import classes from "./AllMessages.module.scss";

const AllMessages = () => {
  return (
    <div className={classes.allMessages}>
      <div className={`${classes.message} ${classes.left}`}>
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
      </div>
    </div>
  );
};

export default AllMessages;
