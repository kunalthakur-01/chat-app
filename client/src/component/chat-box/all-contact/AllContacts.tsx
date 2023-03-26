import React from "react";

import classes from "./AllContacts.module.scss";

import { FiSearch } from "react-icons/fi";
import PinnedMessages from "./PinnedMessages";
import AllMessages from "./AllMessages";

const AllContacts: React.FC = () => {
  return (
    <div className={`${classes.all_contacts_section} box_container`}>
      <div className={classes.top_section}>
        <h1>Messages</h1>
        <button>
          <FiSearch />
        </button>
      </div>
      <div className={classes.all_messages}>
        <PinnedMessages />
        <AllMessages />
      </div>
    </div>
  );
};

export default AllContacts;
