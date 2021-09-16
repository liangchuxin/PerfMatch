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
import mail from "../icons/mail-light.svg";

function SignUp(props) {
  const identity = props.match.params.identity;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>Create an account</h1>
        <form>
          <span className="icoContainer">
            <span className="icoPlaceholder">
              <img src={user} />
            </span>
            <input name="username" placeholder="Username *" />
          </span>
          <span className="icoContainer">
            <span className="icoPlaceholder">
              <img src={mail} />
            </span>
            <input name="email" type="email" placeholder="Email address *" />
          </span>
          <span className="icoContainer">
            <span className="icoPlaceholder">
              <img src={lock} />
            </span>
            <input name="password" type="password" placeholder="Password *" />
          </span>
          <button onClick={() => history.push("/api/CreateEmployer")}>
            REGISTER
            <span style={{ marginLeft: "20px" }} className="arrow">
              <img src={arrowRight} />
            </span>
          </button>
          <div className="more">
            <span>
              <a onClick={() => history.push("/login")}>
                Already have an account
              </a>
            </span>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default SignUp;
