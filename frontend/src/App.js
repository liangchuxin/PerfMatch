import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import EmployeeFeed from "./components/EmployeeFeed";
import MatchBlock from "./components/RecentMatch";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import FindPassword from "./components/FindMyPassword";
import JoinEmployerPage from "./components/JoinEmployerPage";
import Employer from "./components/Employer";
// import Employee from "./component/Employee";
import "./style/App.scss";
import "./style/Fonts.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup/:identity" component={SignUp} />
        <Route exact path="/findmypassword" component={FindPassword} />
        <Route exact path="/login" component={Login} />
        <Route path="/joinEmployer" component={JoinEmployerPage} />
        <Route path="/employer/:id" component={Employer} />
        {/* <Route path='/employee/:id' component={Employee}/> */}
      </Switch>
    </Router>
  );
}

export default App;
