import React from 'react';

import classes from './MessagesArea.module.scss';
import AllMessages from './AllMessages';

const MessagesArea = () => {
  return (
    <div className={classes.messages_area}>
      <AllMessages />
    </div>
  )
}

export default MessagesArea;
