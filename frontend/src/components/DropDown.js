import "../style/DropDown.scss";
import { useHistory } from "react-router-dom";
import React from "react";

function DropDown(props) {
  const history = useHistory();
  const isActive = props.isActive;
  const domRef = React.useRef();
  const logOut = () => {
    localStorage.clear("token");
  };

  return (
    // <div className={`dropDown ${isActive ? "active" : ""}`} ref={domRef}>
    //   <a onClick={() => history.push("/userHome")}>User Home</a>
    //   <a href="#">Preferences</a>
    //   <a onClick={logOut}>Logout</a>
    // </div>
    <div className={`dropDown ${isActive ? "active" : ""}`} ref={domRef}>
      {props.children}
    </div>
  );
}

export default DropDown;
