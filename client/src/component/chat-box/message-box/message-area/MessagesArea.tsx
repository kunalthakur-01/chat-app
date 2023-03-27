import React from 'react';

import classes from './MessagesArea.module.scss';
import ReceiverMessages from './ReceiverMessages';
import SenderMessages from './SenderMessages';

const MessagesArea = () => {
  return (
    <div className={classes.messages_area}>
      <SenderMessages />
      <ReceiverMessages />
    </div>
  )
}

export default MessagesArea;
