import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import "../style/SignUp.scss";
// icon
import arrowRight from "../icons/arrow-right.svg";
import lock from "../icons/lock.svg";
import user from "../icons/user.svg";
// import mail from "../icons/mail-light.svg";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>Login</h1>
        <form>
          <span className="icoContainer">
            <span className="icoPlaceholder">
              <img src={user} />
            </span>
            <input placeholder="Username *" />
          </span>
          <span className="icoContainer">
            <span className="icoPlaceholder">
              <img src={lock} />
            </span>
            <input type="password" placeholder="Password *" />
          </span>
          <label className="remember">
            <input type="checkbox" id="remember" value="REMEMBER ME" />
            <span className="checkMark"></span>
            <span>REMEMBER ME</span>
          </label>
          <button>
            LOGIN
            <span style={{ marginLeft: "20px" }} className="arrow">
              <img src={arrowRight} />
            </span>
          </button>
          <div className="more">
            <span>
              <a onClick={() => history.push("/signup")}>Create an account</a>
            </span>
            <span>
              <a onClick={() => history.push("/findmypassword")}>
                Find my password
              </a>
            </span>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
