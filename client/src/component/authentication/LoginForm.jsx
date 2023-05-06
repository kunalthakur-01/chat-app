import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import classes from "./RegisterForm.module.scss";

const LoginForm  = () => {
  return (
    <section className={classes.authentication_section}>
      <div className={classes.form_container}>
        <div className={classes.app_logo}>
          <img src={logo} alt="my-logo" />
          <h1>SNAPPY</h1>
        </div>
        <form action="">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button
            style={{ backgroundColor: "var(--dark_border_color1)" }}
            type="submit"
          >
            Login
          </button>
        </form>
        <span>
          Don't have an account ? <Link to={"/register"}>REGISTER</Link>
        </span>
      </div>
    </section>
  );
};

export default LoginForm;
