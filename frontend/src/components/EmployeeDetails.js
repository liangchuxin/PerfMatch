import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style/SignUp.scss";
import "../style/CompleteDetails.scss";
import "../style/App.scss";
import FadeInSection from "./FadeIn";
// icons
import iconDown from "../icons/chevrons-down.svg";
import iconRight from "../icons/chevrons-right.svg";

const EmployeeDetails = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  return (
    <>
      <div className="Find findEmployer">
        <div className="full">
          <h1>Find Your Ideal Employer</h1>
          <p className="description">
            Seeking for a suitable family to work for? We strive to help you
            find you the most suitable employer.
          </p>
          <a className="findButton">
            <span className="icon">
              <img src={iconDown} />
            </span>
            COMPLETE YOUR DETAILS
          </a>
        </div>
      </div>
      <div className="infoCollection">
        <div className="progress">
          <div className="tabs">
            <span className="tab active">BASIC INFORMATION</span>
            <span className="icon">
              <img src={iconRight} />
            </span>
            <span className="tab">EXPECTATIONS</span>
            <span className="icon">
              <img src={iconRight} />
            </span>
            <span className="tab">SOCIAL MEDIA</span>
          </div>
        </div>
        <FadeInSection>
          <div className="fields">
            <form>
              <div className="name">
                <span className="label">
                  Full Name <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup twoCol">
                  <input placeholder="Jane" />
                  <input placeholder="Doe" />
                </span>
              </div>
              <div className="birth">
                <span className="label">
                  Date of Birth <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup threeCol">
                  <select name="year">
                    <option value="1990">1990</option>
                  </select>
                  <select name="month">
                    <option value="1">January</option>
                  </select>
                  <select name="date">
                    <option value="1">01</option>
                  </select>
                </span>
              </div>
              <div className="nationality">
                <span className="label">
                  Nationality <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <select name="nationality">
                    <option value="indonesian">Indonesian</option>
                    <option value="chinese">Chinese</option>
                  </select>
                </span>
              </div>
              <div className="fin">
                <span className="label">
                  Full Name <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <input placeholder="T1234567A" />
                </span>
              </div>
              <div className="mobile">
                <span className="label">
                  Mobile Number <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <input placeholder="(65) 8888 - 8888" />
                </span>
              </div>
              <div className="marital">
                <span className="label">
                  Marital Status <span style={{ color: "#ED721D" }}>*</span>
                </span>
                <span className="fieldGroup fullCol">
                  <select name="marital">
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </span>
              </div>
              <div>
                <button className="next">NEXT</button>
              </div>
            </form>
          </div>
        </FadeInSection>
      </div>
    </>
  );
};

export default EmployeeDetails;
