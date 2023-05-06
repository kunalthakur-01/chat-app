import React from "react";

import classes from "./AllContacts.module.scss";

import { FiSearch } from "react-icons/fi";
import PinnedContacts from "./PinnedContacts";
import UnpinnedContacts from "./UnpinnedContacts";

const AllContacts = () => {
  return (
    <div className={`${classes.all_contacts_section} box_container`}>
      <div className={classes.top_section}>
        <h1>Messages</h1>
        <button>
          <FiSearch />
        </button>
      </div>
      <div className={classes.all_messages}>
        <PinnedContacts />
        <UnpinnedContacts />
      </div>
    </div>
  );
};

export default AllContacts;
