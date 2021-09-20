import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style/SignUp.scss";
// icon
import arrowRight from "../icons/arrow-right.svg";
import lock from "../icons/lock.svg";
import user from "../icons/user.svg";
import mail from "../icons/mail-light.svg";

async function loginUser(accountData) {
  return fetch("api/getToken", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(accountData)
  })
  .then(data => data.json())
}

function SignUp({ token, setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleRegister = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  };

  // const identity = props.match.params.identity;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();

  if (token) {
    return <Redirect to='/joinEmployer' />
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>Create an account</h1>
        <form onSubmit={handleRegister}>
          <span className="icoContainer">
            <span className="icoPlaceholder">
              <img src={user} />
            </span>
            <input name="username" placeholder="Username *" onChange={e => setUsername(e.target.value)}/>
          </span>
          <span className="icoContainer">
            <span className="icoPlaceholder">
              <img src={mail} />
            </span>
            <input name="email" type="email" placeholder="Email address *" />
          </span>
          <span className="icoContainer">
            <span className="icoPlaceholder">
              <img src={lock} />
            </span>
            <input name="password" type="password" placeholder="Password *" onChange={e => setPassword(e.target.value)} />
          </span>
          <button type="submit">
            REGISTER
            <span style={{ marginLeft: "20px" }} className="arrow">
              <img src={arrowRight} />
            </span>
          </button>
          <div className="more">
            <span>
              <a onClick={() => history.push("/login")}>
                Already have an account
              </a>
            </span>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default SignUp;
