import React from "react";

import classes from "./PinnedContacts.module.scss";

import { TbPinnedFilled } from "react-icons/tb";
import ContactComponent from "./ContactComponent";

const PinnedContacts = () => {
  return (
    <div className={classes.pinned_section}>
      <p>
        <TbPinnedFilled /> Pinned Message
      </p>
      <ul className={classes.pinned_messages_list}>
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
      </ul>
    </div>
  );
};

export default PinnedContacts;
