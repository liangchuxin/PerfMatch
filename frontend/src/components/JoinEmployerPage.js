import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import "../style/JoinEmployerPage.scss";
// icons
import crossHair from "../icons/crosshair-86.svg";
import power from "../icons/power-86.svg";
import barChart from "../icons/bar-chart-86.svg";
import edit from "../icons/edit-86.svg";

const JoinEmployerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  const logOut = () => {
    localStorage.clear("token");
    history.push("/");
  };
  return (
    <>
      <Header />
      <div className="mainWrapper">
        <div className="contentWrapper">
          <div className="greeting">
            <h1>Good morning, Celia.</h1>
          </div>
          <div className="cardContainer">
            <div
              className="card"
              onClick={() => history.push("/complete-your-details")}
            >
              <img src={crossHair} />
              <div className="text">
                <p className="cardName accent">Start matching!</p>
                <p className="instruction">Find your perfmatch!</p>
              </div>
            </div>
            <div className="card">
              <img src={edit} />
              <div className="text">
                <p className="cardName">Change account info</p>
                <p className="instruction">Modify username / email</p>
              </div>
            </div>
            <div className="card">
              <img src={barChart} />
              <div className="text">
                <p className="cardName">Current match status</p>
                <p className="instruction">View your match results</p>
              </div>
            </div>
            <div className="card" onClick={logOut}>
              <img src={power} />
              <div className="text">
                <p className="cardName">Log out</p>
                <p className="instruction">Log out of current account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JoinEmployerPage;
