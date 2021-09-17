import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style/SignUp.scss";
import "../style/CompleteDetails.scss";
import "../style/App.scss";
import FadeInSection from "./FadeIn";
import EmployeeDetails from "./EmployeeDetails";
import EmployerDetails from "./EmployerDetails";
// icons
import iconDown from "../icons/chevrons-down.svg";
import iconRight from "../icons/chevrons-right.svg";

const CompleteDetails = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  return (
    <div className="App">
      <Header />
      {/* <EmployeeDetails /> */}
      <EmployerDetails />
      <Footer />
    </div>
  );
};

export default CompleteDetails;
