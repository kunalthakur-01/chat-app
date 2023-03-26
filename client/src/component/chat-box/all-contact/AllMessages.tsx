import React from 'react';

import  classes from './AllMessages.module.scss';
import ContactComponent from './ContactComponent';

import { MdOutlineMessage } from "react-icons/md";


const AllMessages:React.FC = () => {
  return (
    <div className={classes.all_messages_section}>
      <p>
        <MdOutlineMessage /> &nbsp; All Message
      </p>
      <ul className={classes.all_messages_list}>
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
      </ul>
    </div>
  )
}

export default AllMessages;
