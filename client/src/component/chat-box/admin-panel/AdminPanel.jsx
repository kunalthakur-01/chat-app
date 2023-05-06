import React from "react";

import classes from "./AdminPanel.module.scss";

import logo from "../../../assets/logo.svg";

const AdminPanel = () => {
  return (
    <div className={`${classes.admin_panel_section} box_container`}>
      <div className={classes.app_logo}>
        <img src={logo} alt="my-logo" />
        <h2>SNAPPY</h2>
      </div>
      <hr />
    </div>
  );
};

export default AdminPanel;
