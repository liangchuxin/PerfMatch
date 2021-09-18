import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style/CompleteDetails.scss";
import EmployeeDetails from "./EmployeeDetails";
import EmployerDetails from "./EmployerDetails";

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
