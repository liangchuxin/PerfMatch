import logo from "../images/logo.png";
import "../style/Header.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import DropDown from "./DropDown";
import React from "react";
// import { Transition } from "react-transition-group";

// const defaultStyles = {
//   transition: `all 0.3s`,
//   display: `none`,
//   opacity: 0,
//   transform: `translateY(10px)`,
//   visibility: `hidden`,
//   transitionDuration: `0.3s`,
//   transitionProperty: `display, transform, opacity, visibility`,
// };

// const transitionStyles = {
//   entering: {
//     opacity: 1,
//     visibility: `visible`,
//     transform: `translateY(0)`,
//     display: `block`,
//     transition: `all 0.3s`,
//   },
//   entered: {
//     opacity: 1,
//     visibility: `visible`,
//     transform: `translateY(0)`,
//     display: `block`,
//     transition: `all 0.3s`,
//   },
//   exiting: {
//     opacity: 0,
//     visibility: `hidden`,
//     transform: `translateY(10)`,
//     display: `none`,
//     transition: `all 0.3s`,
//   },
//   exited: {
//     opacity: 0,
//     visibility: `hidden`,
//     transform: `translateY(10)`,
//     display: `none`,
//     transition: `all 0.3s`,
//   },
// };
const logOut = () => {
  localStorage.clear("token");
};
function Header() {
  const domRef = React.useRef();
  const history = useHistory();
  const token = localStorage.getItem("token");
  // if (token) {
  //   return (
  //     <div className="header">
  //       <a onClick={() => history.push("/")}>
  //         <img src={logo} className="logo"></img>
  //       </a>
  //       <div className="menu">
  //         <span onClick={() => history.push("/")}>Home</span>
  //         <span>About Us</span>
  //         <span>FAQs</span>
  //         <span>Enquiry</span>
  //         <span>More</span>
  //         <span>Search</span>
  //         {/* <span className="start">Start Now</span> */}
  //       </div>
  //       <div className="user">
  //         <img src="https://cdn.jsdelivr.net/gh/liangchuxin/blog-imgs/img/20210802205546.jpg" />
  //       </div>
  //     </div>
  //   );
  // } else {
  const [isActive, setActive] = useState(false);
  const dropToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="header">
      <a onClick={() => history.push("/")}>
        <img src={logo} className="logo"></img>
      </a>
      <div className="menu">
        <span onClick={() => history.push("/")}>Home</span>
        <span>About Us</span>
        <span>FAQs</span>
        <span>Enquiry</span>
        <span>More</span>
        <span>Search</span>
        {/* <span className="start">Start Now</span> */}
      </div>
      <div className="user" onMouseEnter={dropToggle} onMouseLeave={dropToggle}>
        <img src="https://cdn.jsdelivr.net/gh/liangchuxin/blog-imgs/img/20210802205546.jpg" />
        {/* <div className={`dropDown ${isActive ? "active" : ""}`}>
          <a onClick={() => history.push("/userHome")}>User Home</a>
          <a href="#">Preferences</a>
          <a href="#">Logout</a>
        </div> */}
        {/* <Transition in={isActive} timeout={300}>
          {(state) => (
            <DropDown
              title="Header Dropdown"
              styles={{
                ...defaultStyles,
                ...transitionStyles[state],
              }}
              isActive={isActive}
            />
          )}
        </Transition> */}
        <DropDown isActive={isActive}>
          <a onClick={() => history.push("/user")}>User Home</a>
          <a href="#">Preferences</a>
          <a onClick={logOut}>Logout</a>
        </DropDown>
        <div className={`hoverer ${isActive ? "active" : ""}`}></div>
      </div>
    </div>
  );
}
// }

export default Header;
