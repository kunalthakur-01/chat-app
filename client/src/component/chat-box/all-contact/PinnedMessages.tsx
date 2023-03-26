import React from "react";

import classes from "./PinnedMessages.module.scss";

import { TbPinnedFilled } from "react-icons/tb";
import ContactComponent from "./ContactComponent";

const PinnedMessages: React.FC = () => {
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

export default PinnedMessages;
