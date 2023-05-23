import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";

import classes from "./RegisterForm.module.scss";
import useAuth from "../../hooks/auth-hook";
import { login } from "../../api/auth-apis/AuthApi";
import { UserContextManage } from "../../context/UserContext";

const LoginForm  = () => {

  const { sendRequest, data, status, error } = useAuth(login);
  const navigate = useNavigate();
  const ctx = useContext(UserContextManage);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if(e.target[0].value.includes('@')){
      sendRequest({email: e.target[0].value, password: e.target[1].value});
    }
    else sendRequest({phone: +e.target[0].value, password: e.target[1].value});
  };

  useEffect(() => {
    if(data && !error) {
      ctx.login({...data.user}, null);
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
          <input type="text" name="email" placeholder="Email" />
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
