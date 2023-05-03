import React from 'react';

import  classes from './UnpinnedContacts.module.scss';
import ContactComponent from './ContactComponent';

import { MdOutlineMessage } from "react-icons/md";


const UnpinnedContacts:React.FC = () => {
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

export default UnpinnedContacts;
