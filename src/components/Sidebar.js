import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li className="active">
              <Link to="/">
                <i className="la la-dashboard"></i> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/reward">
                <i className="la la-ticket"></i> <span>Add Reward</span>
              </Link>
            </li>
            <li>
              <Link to="/syncuser">
                <i className="la la-users"></i> <span>Sync User</span>
              </Link>
            </li>

            <li className="submenu">
              <Link to href="#">
                <i className="la la-share-alt"></i> <span>Multi Level</span>{" "}
                <span className="menu-arrow"></span>
              </Link>
              <ul style={{ display: "none;" }}>
                <li className="submenu">
                  <Link to href="#">
                    {" "}
                    <span>Level 1</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul style={{ display: "none;" }}>
                    <li>
                      <Link to href="#">
                        <span>Level 2</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to href="#">
                        {" "}
                        <span> Level 2</span>{" "}
                        <span className="menu-arrow"></span>
                      </Link>
                      <ul style={{ display: "none;" }}>
                        <li>
                          <Link to href="javascript:void(0);">
                            Level 3
                          </Link>
                        </li>
                        <li>
                          <Link to href="javascript:void(0);">
                            Level 3
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to href="javascript:void(0);">
                        {" "}
                        <span>Level 2</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to href="javascript:void(0);">
                    {" "}
                    <span>Level 1</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="nav navbar-nav flex-nav">
            <li className="text-left">
              <img
                border="0"
                src={require("../assets/img/icons/ec_inc500.png")}
                alt="logo"
                className="img-inc"
                onClick="window.open('https://www.inc.com/', '_blank');"
              ></img>
            </li>
            <li className="text-center" style={{ "font-size": "12" }}>
              <div className="text-left" style={{ display: "inline-block;" }}>
                <p
                  style={{
                    margin: "0 0 2",
                    "font-weight": "bold",
                    "line-height": "1",
                    color: "#212121",
                  }}
                >
                  An Award-Winning IT Solutions Firm
                </p>
                <p
                  style={{
                    color: "#f8983a",
                    margin: "0 0 2",
                    "line-height": "1",
                    "font-weight": "900",
                    "letter-spacing": "0.5",
                    "text-shadow": "1 1 0 rgb(4 4 4 / 50%)",
                  }}
                >
                  Together, the future is limitless.
                </p>
                <p
                  style={{
                    margin: "auto",
                    "line-height": "1",
                    "font-weight": "600",
                    color: "#212121",
                  }}
                >
                  {" "}
                  Let&quot;s Innovate
                </p>
              </div>
            </li>
            <li className="text-right">
              <img
                border="0"
                src={require("../assets/img/icons/ec_inc.png")}
                alt="logo"
                className="img-circle"
                onClick="window.open('https://www.inc.com/profile/evolutyz', '_blank');"
              ></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
