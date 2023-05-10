import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./RegisterForm.module.scss";
import logo from "../../assets/logo.svg";
import useAuth from "../../hooks/auth-hook";
import { signup } from "../../api/auth-apis/AuthApi";
import { UserContextManage } from "../../context/UserContext";

const RegisterForm  = () => {
  const {sendRequest, data, status, error} = useAuth(signup);
  const navigate = useNavigate();
  const ctx = useContext(UserContextManage);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    sendRequest({name: e.target[0].value, email: e.target[1].value, phone: e.target[2].value, password: e.target[3].value});
  };

  useEffect(() => {
    if(data && !error) {
      ctx.login(data, null);
    }
  }, [ctx, data, error]);

  useEffect(() => {
    if (status === "completed" && !error) {
      navigate("/chat");
    }
  }, [status, error]);

  if(status === 'pending') {
    return <div style={{width: '100%', height: '100vh'}}>Loading...</div>
  }

  return (
    <section className={classes.authentication_section}>
      <div className={classes.form_container}>
        <div className={classes.app_logo}>
          <img src={logo} alt="my-logo" />
          <h1>SNAPPY</h1>
        </div>
        <form onSubmit={formSubmitHandler}>
          <input type="text" name="username" placeholder="Username" required/>
          <input type="email" name="email" placeholder="Email" required/>
          <input type="number" name="phone" placeholder='Phone' required/>
          <input type="password" name="password" placeholder="Password" required/>
          {/* <input
            type="password"
            name="password"
            placeholder="Confirm password"
          /> */}
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
