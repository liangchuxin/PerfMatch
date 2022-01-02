import React, { useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import FindPassword from "./components/FindMyPassword";
import JoinEmployerPage from "./components/JoinEmployerPage";
import CompleteDetails from "./components/CompleteDetails";
import Employer from "./components/Employer";
import useToken from "./components/useToken";
import MatchList from "./components/MatchList";
// import Employee from "./component/Employee";
import "./style/App.scss";
import "./style/Fonts.scss";

function App() {
  const { token, setToken } = useToken();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <SignUp {...props} token={token} setToken={setToken} />
          )}
        />
        <Route exact path="/findmypassword" component={FindPassword} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login {...props} token={token} setToken={setToken} />
          )}
        />
        <Route
          exact
          path="/complete-your-details"
          component={CompleteDetails}
        />
        <Route path="/matches" component={MatchList} />
        <Route path="/user" component={JoinEmployerPage} />
        <Route path="/employer/:id" component={Employer} />
        {/* <Route path='/employee/:id' component={Employee}/> */}
      </Switch>
    </Router>
  );
}

export default App;
