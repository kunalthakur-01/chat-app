import React, { useContext } from "react";

import classes from "./AllContacts.module.scss";

import { FiSearch } from "react-icons/fi";
import PinnedContacts from "./PinnedContacts";
import UnpinnedContacts from "./UnpinnedContacts";
import { UserContextManage } from "../../../context/UserContext";

const AllContacts = () => {
  const ctx = useContext(UserContextManage);
  return (
    <div className={`${classes.all_contacts_section} box_container`}>
      <div className={classes.top_section}>
        <h1>Messages</h1>
        <button>
          <FiSearch />
        </button>
      </div>
      <div className={classes.all_messages}>
        {!!ctx.userData?.pinnedContacts.length && (
          <PinnedContacts contacts={ctx.userData?.pinnedContacts} />
        )}
        {!!ctx.userData?.contacts.length && (
          <UnpinnedContacts contacts={ctx.userData?.contacts} />
        )}
        {ctx.userData &&
          ctx.userData.contacts.length === 0 &&
          ctx.userData.pinnedContacts.length === 0 && (
            <p>You don't have a friend, make friend by search</p>
          )}
      </div>
    </div>
  );
};

export default AllContacts;
