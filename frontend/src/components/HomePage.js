import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import EmployeeFeed from "./EmployeeFeed";
import EmployerFeed from "./EmployerFeed";
import MatchBlock from "./RecentMatch";
import FadeInSection from "./FadeIn";
import "../style/FadeIn.scss";
// icons
import miniCheck from "../icons/check-circle.svg";
import miniUser from "../icons/user-plus.svg";
import miniGrid from "../icons/grid.svg";
import miniMail from "../icons/mail.svg";
import miniStar from "../icons/star.svg";
import miniEdit from "../icons/edit-3.svg";
import largeCheck from "../icons/large-check-circle.svg";
import largeEdit from "../icons/large-edit-3.svg";
import largeGrid from "../icons/large-grid.svg";
import largeMail from "../icons/large-mail.svg";
import largeStar from "../icons/large-star.svg";
import largeUser from "../icons/large-user-plus.svg";
import arrowRight from "../icons/arrow-right.svg";
function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // document.addEventListener("scroll", () => {
    //   const isTop = window.scrollY < 100;
    //   if (isTop !== this.state.isTop) {
    //     console.log("Change isTop");
    //     this.setState({ isTop: isTop });
    //     console.log(this.state.dropdownMenu);
    //   }
    // });
  }, []);

  const [isActive, setActive] = useState(true);

  const handleToggle = () => {
    setActive(!isActive);
  };

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
  ]);

  const [employerFeed, setemployerFeed] = useState([
    {
      id: 1,
      name: "John",
      age: "33",
      picurl:
        "https://cdn.jsdelivr.net/gh/liangchuxin/perfmatch-files/images/profile-john.png",
      descrip:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 2,
      name: "Mary",
      age: "35",
      picurl:
        "https://cdn.jsdelivr.net/gh/liangchuxin/perfmatch-files/images/profile-jane.png",
      descrip:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 3,
      name: "Jack",
      age: "53",
      picurl:
        "https://cdn.jsdelivr.net/gh/liangchuxin/perfmatch-files/images/profile-jack.png",
      descrip:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ]);

  const refreshFeed = () => {
    console.log(employeeFeed);
    const newId = employeeFeed[employeeFeed.length - 1].id + 1;
    const newEmployee = {
      id: newId,
      name: "Unknown" + newId,
      age: Math.floor(Math.random() * 60) + 30,
    };

    setEmployeeFeed([...employeeFeed, newEmployee]);

    console.log(employerFeed);
    const newId2 = employerFeed[employerFeed.length - 1].id + 1;
    const newemployer = {
      id: newId2,
      name: "Unknown" + newId2,
      age: Math.floor(Math.random() * 60) + 30,
    };

    setemployerFeed([...employerFeed, newemployer]);
  };

  const history = useHistory();

  //   const HtmlLayout = () => (
  //     <script>
  //   function changeTab(toTab) {
  //     var employerTab = document.getElementById('employerTab');
  //     var employeeTab = document.getElementById('employeeTab');
  //     if (toTab == 'employerTab') {
  //       if (employeeTab.classList.contains('active')) {
  //         employeeTab.classList.remove("active");
  //         document.getElementById('employeeList').style.display='none';
  //       }
  //       if (employerTab.classList.contains('active') == false) {
  //         employerTab.classList.add("active");
  //         document.getElementById('employerList').style.display='block';
  //       }
  //     } else {
  //       if (employerTab.classList.contains('active')) {
  //         employerTab.classList.remove("active");
  //         document.getElementById('employerList').style.display='none';
  //       }
  //       if (employeeTab.classList.contains('active') == false) {
  //         employerTab.classList.add("active");
  //         document.getElementById('employeeList').style.display='block';
  //       }
  //     }
  //   }
  // </script>
  //   );

  return (
    <div className="App">
      <Header />
      {/* <EmployeeFeed employeeFeed={employeeFeed} /> */}
      {/* Employer 还是 Employee? */}
      <div className="Find">
        {/* <button onClick={() => history.push("/joinEmployer")}>join</button> */}
        <div className="findEmployer">
          <h2>I'm an employee</h2>
          <p className="description">
            Seeking for a suitable family to work for? We strive to help you
            find you the most suitable employer.
          </p>
          <a className="findButton" onClick={() => history.push("/signup")}>
            FIND EMPLOYER{" "}
            <span style={{ color: "#ed721d", fontWeight: "900" }}>NOW</span>
          </a>
        </div>
        <div className="findEmployee">
          <h2>I'm an employer</h2>
          <p className="description">
            Thinking of hiring a FDW? We strive to help you find you the most
            suitable helper for your home.
          </p>
          <a className="findButton" onClick={() => history.push("/signup")}>
            FIND EMPLOYEE{" "}
            <span style={{ color: "#ed721d", fontWeight: "900" }}>NOW</span>
          </a>
        </div>
      </div>
      {/* Employer Helper Feed */}
      <div className="Feed">
        <h2 className="bar">Recent matches</h2>
        <div className="feedTab">
          <a
            id="employerTab"
            onClick={handleToggle}
            className={isActive ? "active" : null}
          >
            <h2>Employers</h2>
          </a>
          <a
            id="employeeTab"
            onClick={handleToggle}
            className={isActive ? null : "active"}
          >
            <h2>Employees</h2>
          </a>
        </div>
        <div id="employerList" className={isActive ? "active" : "hidden"}>
          <MatchBlock employeeFeed={employerFeed} />
        </div>
        <div
          className="employeeList"
          className={isActive ? "hidden" : "active"}
        >
          <MatchBlock employeeFeed={employeeFeed} />
        </div>
        <a className="logReg" onClick={() => history.push("/signup")}>
          Get personalised list{" "}
          <span style={{ marginLeft: "12px" }}>
            <img src={arrowRight} />
          </span>
        </a>
      </div>
      {/* 咱能干啥？ */}
      <div className="Features">
        <div className="description">
          <p className="capital">HOW TO GET STARTED WITH PERF MATCH?</p>
          <h2 className="slogan">
            Find your <span className="underline">perfect</span> match within
            <br />a few minutes.
          </h2>
          <h2 className="slogan accent">No payment required.</h2>
          <p className="intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            <span className="light">
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </p>
        </div>
        <FadeInSection>
          <div className="featuresContainer">
            <div className="featuresCard">
              <div className="cardContainer">
                <p className="step">1. Create an account</p>
                <p className="instruction">
                  <span className="iconMini">
                    <img src={miniUser} />
                  </span>
                  Go to registration page to sign up
                </p>
              </div>
              <span className="iconBig">
                <img src={largeUser} />
              </span>
            </div>
            <div className="featuresCard">
              <div className="cardContainer">
                <p className="step">2. Fill in information</p>
                <p className="instruction">
                  <span className="iconMini">
                    <img src={miniEdit} />
                  </span>
                  Type personal information in page
                </p>
              </div>
              <span className="iconBig">
                <img src={largeEdit} />
              </span>
            </div>
            <div className="featuresCard">
              <div className="cardContainer">
                <p className="step">3. Submit your responses</p>
                <p className="instruction">
                  <span className="iconMini">
                    <img src={miniCheck} />
                  </span>
                  Do not reload before submitting
                </p>
              </div>
              <span className="iconBig">
                <img src={largeCheck} />
              </span>
            </div>
            <div className="featuresCard">
              <div className="cardContainer">
                <p className="step">4. Wait for email</p>
                <p className="instruction">
                  <span className="iconMini">
                    <img src={miniMail} />
                  </span>
                  We will notify you when finished
                </p>
              </div>
              <span style={{ top: "35px" }} className="iconBig">
                <img src={largeMail} />
              </span>
            </div>
            <div className="featuresCard">
              <div className="cardContainer">
                <p className="step">5. Go through the choices</p>
                <p className="instruction">
                  <span className="iconMini">
                    <img src={miniGrid} />
                  </span>
                  Lists of employers and employees
                </p>
              </div>
              <span style={{ top: "25px" }} className="iconBig">
                <img src={largeGrid} />
              </span>
            </div>
            <div className="featuresCard">
              <div className="cardContainer">
                <p className="step">6. Found your perfmatch!</p>
                <p className="instruction">
                  <span className="iconMini">
                    <img src={miniStar} />
                  </span>
                  Find your perfect match
                </p>
              </div>
              <span className="iconBig">
                <img src={largeStar} />
              </span>
            </div>
          </div>
        </FadeInSection>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
