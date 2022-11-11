import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SignOutButton } from "./SignOutButton";
import { useMsal } from "@azure/msal-react";
import Sidebar from "./Sidebar";

function Navbar() {
  const ProfileData = (props) => {
    console.log(props.graphData);
  };

  const { accounts } = useMsal();
  // eslint-disable-next-line no-unused-vars
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  const [isToggle, setToggle] = useState(true);
  const sidebarToggle = () => {
    setToggle(!isToggle);
  };
  return (
    <>
      <div className={isToggle ? "main-wrapper" : "main-wrapper mini-sidebar slide-nav"}>
        <div className="header">
          <div className="header-left">
            <a href="index.html" className="logo">
              <img src={require("../assets/img/logo.png")} alt="" />
            </a>
          </div>

          <span onClick={sidebarToggle} id="toggle_btn">
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </span>

          <div className="page-title-box">
            <h3>Evolutyz Loyalty Program</h3>
          </div>

          <span id="mobile_btn" className="mobile_btn" onClick={sidebarToggle}>
            <i className="fa fa-bars"></i>
          </span>

          <ul className="nav user-menu">
            <Dropdown className="nav-item" as="li">
              <Dropdown.Toggle className="nav-link" as="a" id="dropdown-basic">
                <i className="fa fa-bell-o"></i>{" "}
                <span className="badge badge-pill">3</span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <Link to href="javascript:void(0)" className="clear-noti">
                    {" "}
                    Clear All{" "}
                  </Link>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media">
                          <span className="avatar">
                            <img
                              alt=""
                              src={require("../assets/img/profiles/avatar-04.jpg")}
                            ></img>
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">
                                Dungi Pravalika Reddy
                              </span>{" "}
                              reached{" "}
                              <span className="noti-title">500 points</span> in{" "}
                              <span className="noti-title">
                                Social-Media Leadboard
                              </span>{" "}
                              in just{" "}
                              <span className="noti-title">6 months</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                3 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media">
                          <span className="avatar">
                            <img
                              alt=""
                              src={require("../assets/img/profiles/avatar-10.jpg")}
                            ></img>
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">
                                Srikanth Guttula
                              </span>{" "}
                              completes{" "}
                              <span className="noti-title">4 Years</span> work
                              anniversary at Evolutyz Vizag
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                12 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media">
                          <span className="avatar">
                            <img
                              alt=""
                              src={require("../assets/img/profiles/avatar-12.jpg")}
                            ></img>
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">
                                Srikanth Konduru
                              </span>{" "}
                              winner of{" "}
                              <span className="noti-title">Emoji Quiz</span>{" "}
                              weekly activity
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                4 days ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media">
                          <span className="avatar">
                            <img
                              alt=""
                              src={require("../assets/img/profiles/avatar-16.jpg")}
                            ></img>
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Solman Tanuku</span>{" "}
                              runner up{" "}
                              <span className="noti-title">5k Run</span> event
                              held at Tenneti Beach
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                1 week ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media">
                          <span className="avatar">
                            <img
                              alt=""
                              src={require("../assets/img/profiles/avatar-01.jpg")}
                            ></img>
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Arushi Patro</span>{" "}
                              promoted from{" "}
                              <span className="noti-title">Intern</span> to{" "}
                              <span className="noti-title">
                                Business Analyst
                              </span>{" "}
                              for ELP Project
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                1 year ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="activities.html">View all Notifications</a>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="nav-item has-arrow main-drop" as="li">
              <Dropdown.Toggle className="nav-link" as="a" id="dropdown-basic1">
                <span className="user-img">
                  <img
                    src={require("../assets/img/profiles/avatar-21.jpg")}
                    alt=""
                  ></img>
                  <span className="status online"></span>
                </span>

                <ProfileData graphData={graphData} />
                <span> {name} </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/Profile">My Profile</Dropdown.Item>
                <SignOutButton />
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Navbar;
