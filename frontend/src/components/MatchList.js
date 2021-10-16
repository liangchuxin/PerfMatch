import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../style/MatchList.scss";
import Header from "./Header";
import Footer from "./Footer";
// import FadeInSection from "./FadeIn";
// import "../style/FadeIn.scss";
import MatchBlock from "./RecentMatch";

function MatchList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [employeeFeed, setEmployeeFeed] = useState([
    {
      id: 1,
      name: "Jake",
      age: "33",
      picurl:
        "https://cdn.jsdelivr.net/gh/liangchuxin/perfmatch-files/images/profile-john.png",
      descrip:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 2,
      name: "Milena",
      age: "35",
      picurl:
        "https://cdn.jsdelivr.net/gh/liangchuxin/perfmatch-files/images/profile-jane.png",
      descrip:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 3,
      name: "Joseph",
      age: "53",
      picurl:
        "https://cdn.jsdelivr.net/gh/liangchuxin/perfmatch-files/images/profile-jack.png",
      descrip:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 1,
      name: "Jake",
      age: "33",
      picurl:
        "https://cdn.jsdelivr.net/gh/liangchuxin/perfmatch-files/images/profile-john.png",
      descrip:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 2,
      name: "Milena",
      age: "35",
      picurl:
        "https://cdn.jsdelivr.net/gh/liangchuxin/perfmatch-files/images/profile-jane.png",
      descrip:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 3,
      name: "Joseph",
      age: "53",
      picurl:
        "https://cdn.jsdelivr.net/gh/liangchuxin/perfmatch-files/images/profile-jack.png",
      descrip:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ]);
  return (
    <div className="pageContainer">
      <Header />
      {/* <MatchBlock employeeFeed={employeeFeed} /> */}
      <div className="matchContainer">
        <div className="options">
          <div className="optionLabel">Categories</div>
          <div className="optionItems">
            <a className="active">All</a>
            <a>Child care</a>
            <a>Senior care</a>
            <a>School support</a>
            <a>Housekeeping</a>
            <a>Day care</a>
            <a>Pet care</a>
          </div>
          <div className="optionLabel">Languages</div>
          <div className="optionItems">
            <a className="active">All</a>
            <a>English</a>
            <a>Indonesian</a>
            <a>Chinese</a>
            <a>Others</a>
          </div>
          <div className="optionLabel">Experience</div>
          <div className="optionItems">
            <a className="active">All</a>
            <a>{"< 1 year"}</a>
            <a>1 year +</a>
            <a>3 years +</a>
            <a>5 years +</a>
          </div>
        </div>
        <div className="matches">
          <h1>List of Perfmatch</h1>
          <div className="matchTab">
            <a className="active">General</a>
            <a>Experience</a>
            <a>Rating</a>
            <a>Views</a>
          </div>
          {employeeFeed.map((employee) => (
            // <FadeInSection>
            <div className="matchCard">
              <div className="profilePic">
                <img src={employee.picurl} />
              </div>
              <div className="profileInfo">
                <div className="profileMeta">
                  <span>
                    <h3>NAME</h3>
                    <p>{employee.name}</p>
                  </span>
                  <span>
                    <h3>AGE</h3>
                    <p>{employee.age}</p>
                  </span>
                </div>
                <p className="profileDescrip">{employee.descrip}</p>
              </div>
            </div>
            // </FadeInSection>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MatchList;
