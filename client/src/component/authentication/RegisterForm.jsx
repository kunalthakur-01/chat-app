import React from "react";
import { Link } from "react-router-dom";

import classes from "./RegisterForm.module.scss";
import logo from "../../assets/logo.svg";

const RegisterForm  = () => {
  return (
    <section className={classes.authentication_section}>
      <div className={classes.form_container}>
        <div className={classes.app_logo}>
          <img src={logo} alt="my-logo" />
          <h1>SNAPPY</h1>
        </div>
        <form action="">
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          {/* <input type="number" name="phone" placeholder='Phone' step={0.01} /> */}
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password"
            placeholder="Confirm password"
          />
          <button type="submit">Register</button>
        </form>
        <span>
          Already have an account ? <Link to={"/login"}>LOGIN</Link>
        </span>
      </div>
    </section>
  );
};

export default RegisterForm;
