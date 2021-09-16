import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import "../style/SignUp.scss";
// icon
import arrowRight from "../icons/arrow-right.svg";
// import lock from "../icons/lock.svg";
// import user from "../icons/user.svg";
import mail from "../icons/mail-light.svg";

function FindPassword() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const history = useHistory();
  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>Find password</h1>
        <form>
          <span className="icoContainer">
          <span className="icoPlaceholder">
              <img src={mail} />
            </span>
          <input type="email" placeholder="Email address *" />
          </span>
          <button>
            SEND EMAIL
            <span style={{ marginLeft: "20px" }} className="arrow">
              <img src={arrowRight} />
            </span>
          </button>
          <div className="more"><span><a onClick={() => history.push("/login")}>Login here</a></span><span><a onClick={() => history.push("/signup")}>Sign up</a></span></div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default FindPassword;
