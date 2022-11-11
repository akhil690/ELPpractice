import React from "react";
import { SignInButton } from "../components/SignInButton";
import { useIsAuthenticated } from "@azure/msal-react";


function Login() {
  const isAuthenticated = useIsAuthenticated();
  
  return (
    <div className="account-page">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              <img src={require("../assets/img/logo.png")} alt="" />
            </div>
          </div>
          <ul className="nav navbar-nav navbar-flex">
            <li>
              <img
                border="0"
                src={require("../assets/img/icons/ec_inc500.png")}
                alt="logo"
                onClick="window.open('https://www.inc.com/', '_blank');"
              />
            </li>
            <li>
              <img
                border="0"
                src={require("../assets/img/icons/ec_inc.png")}
                alt="logo"
                onClick="window.open('https://www.inc.com/profile/evolutyz', '_blank');"
              />
            </li>
          </ul>
        </div>
      </nav>
      <div className="main-wrapper">
        <div className="account-content">
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Login</h3>
              <p className="account-subtitle">&nbsp;</p>

              <div className="form-group text-center">
                {isAuthenticated ? window.location.href = "/home" : <SignInButton />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
