import React from 'react';

import classes from './MessagesArea.module.scss';
import AllMessages from './AllMessages';

const MessagesArea = (props) => {
  return (
    <div className={classes.messages_area}>
      <AllMessages messages={props.messages} />
    </div>
  )
}

export default MessagesArea;
