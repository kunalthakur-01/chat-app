import React from "react";

import classes from "./PinnedContacts.module.scss";

import { TbPinnedFilled } from "react-icons/tb";
import ContactComponent from "./ContactComponent";

const PinnedContacts = (props) => {
  return (
    <div className={classes.pinned_section}>
      <p>
        <TbPinnedFilled /> Pinned Message
      </p>
      <ul className={classes.pinned_messages_list}>
        {props.contacts.map(contact => <ContactComponent key={contact._id} contact={contact} />)}
      </ul>
    </div>
  );
};

export default PinnedContacts;
