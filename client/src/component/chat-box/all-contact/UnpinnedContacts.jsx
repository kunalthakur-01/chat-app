import React from 'react';

import  classes from './UnpinnedContacts.module.scss';
import ContactComponent from './ContactComponent';

import { MdOutlineMessage } from "react-icons/md";


const UnpinnedContacts = (props) => {
  return (
    <div className={classes.all_messages_section}>
      <p>
        <MdOutlineMessage /> &nbsp; All Message
      </p>
      <ul className={classes.all_messages_list}>
        {props.contacts.map(contact => <ContactComponent key={contact._id} contact={contact} />)}
      </ul>
    </div>
  )
}

export default UnpinnedContacts;
