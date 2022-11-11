import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Welcome Admin!</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item active">Home</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-cubes"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>112</h3>
                  <span>Events</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-rupee"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>44</h3>
                  <span>Balance Ipoints</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-id-badge"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>37</h3>
                  <span>Awards Given</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-trophy"></i>
                </span>
                <div className="dash-widget-info">
                  <h3>218</h3>
                  <span>Awards Received</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-4 col-xl-4 d-flex">
            <div className="card flex-fill dash-statistics">
              <div className="card-body">
                <h5 className="card-title">Statistics</h5>
                <div className="stats-list">
                  <div className="stats-info">
                    <p>
                      Total Rewards{" "}
                      <strong>
                        4 <small>/ 65</small>
                      </strong>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{
                          width: "31%",
                          "aria-valuenow": "31",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="stats-info">
                    <p>
                      Pending Rewards{" "}
                      <strong>
                        15 <small>/ 92</small>
                      </strong>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{
                          width: "31%",
                          "aria-valuenow": "31",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="stats-info">
                    <p>
                      Completed Activities{" "}
                      <strong>
                        85 <small>/ 112</small>
                      </strong>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{
                          width: "62%",
                          "aria-valuenow": "62",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="stats-info">
                    <p>
                      Pending Activities{" "}
                      <strong>
                        190 <small>/ 212</small>
                      </strong>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{
                          width: "62%",
                          "aria-valuenow": "62",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="stats-info">
                    <p>
                      Closed Activities{" "}
                      <strong>
                        22 <small>/ 212</small>
                      </strong>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{
                          width: "22%",
                          "aria-valuenow": "22",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4 col-xl-4 text-center">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Total Revenue</h3>
                <div id="bar-charts"></div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4 col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <h4 className="card-title">Task Statistics</h4>
                <div className="statistics">
                  <div className="row">
                    <div className="col-md-6 col-6 text-center">
                      <div className="stats-box mb-4">
                        <p>Total Tasks</p>
                        <h3>385</h3>
                      </div>
                    </div>
                    <div className="col-md-6 col-6 text-center">
                      <div className="stats-box mb-4">
                        <p>Overdue Tasks</p>
                        <h3>19</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-purple"
                    role="progressbar"
                    style={{
                      width: "30%",
                      "aria-valuenow": "30",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100",
                    }}
                  >
                    30%
                  </div>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{
                      width: "22%",
                      "aria-valuenow": "18",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100",
                    }}
                  >
                    22%
                  </div>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{
                      width: "24%",
                      "aria-valuenow": "12",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100",
                    }}
                  >
                    24%
                  </div>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{
                      width: "26%",
                      "aria-valuenow": "14",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100",
                    }}
                  >
                    21%
                  </div>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{
                      width: "10%",
                      "aria-valuenow": "14",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100",
                    }}
                  >
                    10%
                  </div>
                </div>
                <div>
                  <p>
                    <i className="fa fa-dot-circle-o text-purple mr-2"></i>
                    Completed Tasks <span className="float-right">166</span>
                  </p>
                  <p>
                    <i className="fa fa-dot-circle-o text-warning mr-2"></i>
                    Inprogress Tasks <span className="float-right">115</span>
                  </p>
                  <p>
                    <i className="fa fa-dot-circle-o text-success mr-2"></i>
                    On Hold Tasks <span className="float-right">31</span>
                  </p>
                  <p>
                    <i className="fa fa-dot-circle-o text-danger mr-2"></i>
                    Pending Tasks <span className="float-right">47</span>
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-dot-circle-o text-info mr-2"></i>
                    Review Tasks <span className="float-right">5</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card-group m-b-30">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <span className="d-block">New Join Employees</span>
                    </div>
                    <div>
                      <span className="text-success">+3</span>
                    </div>
                  </div>
                  <h3 className="mb-3">6</h3>
                  <div className="progress mb-2" style={{ height: "5" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: "70%",
                        "aria-valuenow": "40",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                      }}
                    ></div>
                  </div>
                  <p className="mb-0">Overall Employees 87</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <span className="d-block">Earnings</span>
                    </div>
                    <div>
                      <span className="text-success">+12.5%</span>
                    </div>
                  </div>
                  <h3 className="mb-3">
                    <i className="fa fa-rupee"></i> 1,42,300
                  </h3>
                  <div className="progress mb-2" style={{ height: "5" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: "70%",
                        "aria-valuenow": "40",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                      }}
                    ></div>
                  </div>
                  <p className="mb-0">
                    Previous Month{" "}
                    <span className="text-muted">
                      <i className="fa fa-rupee"></i>1,15,852
                    </span>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <span className="d-block">Expenses</span>
                    </div>
                    <div>
                      <span className="text-danger">-2.8%</span>
                    </div>
                  </div>
                  <h3 className="mb-3">
                    <i className="fa fa-rupee"></i>8,500
                  </h3>
                  <div className="progress mb-2" style={{ height: "5" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: "70%",
                        "aria-valuenow": "40",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                      }}
                    ></div>
                  </div>
                  <p className="mb-0">
                    Previous Month{" "}
                    <span className="text-muted">
                      <i className="fa fa-rupee"></i>7,500
                    </span>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <span className="d-block">Profit</span>
                    </div>
                    <div>
                      <span className="text-danger">-75%</span>
                    </div>
                  </div>
                  <h3 className="mb-3">
                    <i className="fa fa-rupee"></i>1,12,000
                  </h3>
                  <div className="progress mb-2" style={{ height: "5" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: "70%",
                        "aria-valuenow": "40",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                      }}
                    ></div>
                  </div>
                  <p className="mb-0">
                    Previous Month{" "}
                    <span className="text-muted">
                      <i className="fa fa-rupee"></i>1,42,000
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <h4 className="card-title">
                  Latest Milestones{" "}
                  <span className="badge bg-inverse-danger ml-2">5</span>
                </h4>
                <div className="leave-info-box">
                  <div className="media align-items-center">
                    <a href="profile.html" className="avatar">
                      <img alt="" src={require("../assets/img/user.jpg")}></img>
                    </a>
                    <div className="media-body">
                      <div className="text-sm my-0">Venkat Chaitanya</div>
                      <span className="text-xs font-weight-light text-muted">
                        React Developer, Vizag
                      </span>
                    </div>
                  </div>
                  <div className="row align-items-center mt-3">
                    <div className="col-6">
                      <h6 className="mb-0">4 Sep 2019</h6>
                      <span className="text-sm text-muted">5k Run</span>
                    </div>
                    <div className="col-6 text-right">
                      <span className="badge bg-inverse-warning">
                        runner-up
                      </span>
                    </div>
                  </div>
                </div>
                <div className="leave-info-box">
                  <div className="media align-items-center">
                    <a href="profile.html" className="avatar">
                      <img alt="" src={require("../assets/img/user.jpg")}></img>
                    </a>
                    <div className="media-body">
                      <div className="text-sm my-0">Shalini</div>
                      <span className="text-xs font-weight-light text-muted">
                        HR Manager, Vizag
                      </span>
                    </div>
                  </div>
                  <div className="row align-items-center mt-3">
                    <div className="col-6">
                      <h6 className="mb-0">4 Sep 2019</h6>
                      <span className="text-sm text-muted">5k Run</span>
                    </div>
                    <div className="col-6 text-right">
                      <span className="badge bg-inverse-success">Winner</span>
                    </div>
                  </div>
                </div>
                <div className="load-more text-center">
                  <Link to className="text-dark" href="#">
                    Load More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <h4 className="card-title">
                  Latest Awards{" "}
                  <span className="badge bg-inverse-danger ml-2">2</span>
                </h4>
                <div className="leave-info-box">
                  <div className="media align-items-center">
                    <a href="profile.html" className="avatar">
                      <img alt="" src={require("../assets/img/user.jpg")}></img>
                    </a>
                    <div className="media-body">
                      <div className="text-sm my-0">Venkat Chaitanya</div>
                      <span className="text-xs font-weight-light text-muted">
                        React Developer, Vizag
                      </span>
                    </div>
                  </div>
                  <div className="row align-items-center mt-3">
                    <div className="col-6">
                      <h6 className="mb-0">4 Sep 2019</h6>
                      <span className="text-sm text-muted">5k Run</span>
                    </div>
                    <div className="col-6 text-right">
                      <span className="badge bg-inverse-warning">
                        runner-up
                      </span>
                    </div>
                  </div>
                </div>
                <div className="leave-info-box">
                  <div className="media align-items-center">
                    <a href="profile.html" className="avatar">
                      <img alt="" src={require("../assets/img/user.jpg")}></img>
                    </a>
                    <div className="media-body">
                      <div className="text-sm my-0">Shalini</div>
                      <span className="text-xs font-weight-light text-muted">
                        HR Manager, Vizag
                      </span>
                    </div>
                  </div>
                  <div className="row align-items-center mt-3">
                    <div className="col-6">
                      <h6 className="mb-0">4 Sep 2019</h6>
                      <span className="text-sm text-muted">5k Run</span>
                    </div>
                    <div className="col-6 text-right">
                      <span className="badge bg-inverse-success">Winner</span>
                    </div>
                  </div>
                </div>
                <div className="load-more text-center">
                  <Link to className="text-dark" href="#">
                    Load More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <h4 className="card-title">
                  Leadingboard{" "}
                  <span className="badge bg-inverse-warning ml-2">5</span>
                </h4>
                <div className="leave-info-box">
                  <div className="media align-items-center">
                    <a href="profile.html" className="avatar">
                      <img alt="" src={require("../assets/img/user.jpg")}></img>
                    </a>
                    <div className="media-body">
                      <div className="text-sm my-0">Venkat Chaitanya</div>
                      <span className="text-xs font-weight-light text-muted">
                        React Developer, Vizag
                      </span>
                    </div>
                  </div>
                  <div className="row align-items-center mt-3">
                    <div className="col-6">
                      <h6 className="mb-0">4 Sep 2019</h6>
                      <span className="text-sm text-muted">5k Run</span>
                    </div>
                    <div className="col-6 text-right">
                      <span className="badge bg-inverse-warning">
                        runner-up
                      </span>
                    </div>
                  </div>
                </div>
                <div className="leave-info-box">
                  <div className="media align-items-center">
                    <a href="profile.html" className="avatar">
                      <img alt="" src={require("../assets/img/user.jpg")}></img>
                    </a>
                    <div className="media-body">
                      <div className="text-sm my-0">Shalini</div>
                      <span className="text-xs font-weight-light text-muted">
                        HR Manager, Vizag
                      </span>
                    </div>
                  </div>
                  <div className="row align-items-center mt-3">
                    <div className="col-6">
                      <h6 className="mb-0">4 Sep 2019</h6>
                      <span className="text-sm text-muted">5k Run</span>
                    </div>
                    <div className="col-6 text-right">
                      <span className="badge bg-inverse-success">Winner</span>
                    </div>
                  </div>
                </div>
                <div className="load-more text-center">
                  <Link to className="text-dark" href="#">
                    Load More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">Social-Media Leadboard</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table custom-table mb-0">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link to href="#" className="avatar">
                              <img
                                alt=""
                                src={require("../assets/img/profiles/avatar-19.jpg")}
                              ></img>
                            </Link>
                            <a href="client-profile.html">
                              Sudeep Sehgal <span>Fullstack</span>
                            </a>
                          </h2>
                        </td>
                        <td>Sudeep.Sehgal@evolutyz.com</td>
                        <td>
                          <Link to className="btn btn-white btn-sm btn-rounded">
                            <i className="fa fa-dot-circle-o text-success"></i>{" "}
                            Online
                          </Link>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <Link
                              to
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </Link>
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <Link to href="#" className="avatar">
                              <img
                                alt=""
                                src={require("../assets/img/profiles/avatar-19.jpg")}
                              ></img>
                            </Link>
                            <a href="client-profile.html">
                              Sanjay Ramadugu <span>Devops</span>
                            </a>
                          </h2>
                        </td>
                        <td>Sanjay.Ramadugu@evolutyz.com</td>
                        <td>
                          <Link to className="btn btn-white btn-sm btn-rounded">
                            <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                            Offline
                          </Link>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <Link
                              to
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </Link>
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="client-profile.html" className="avatar">
                              <img
                                alt=""
                                src={require("../assets/img/profiles/avatar-07.jpg")}
                              ></img>
                            </a>
                            <a href="client-profile.html">
                              Florence Masih <span>HR | Noida</span>
                            </a>
                          </h2>
                        </td>
                        <td>Florence.Masih@evolutyz.com</td>
                        <td>
                          <Link to className="btn btn-white btn-sm btn-rounded">
                            <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                            Offline
                          </Link>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <Link
                              to
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </Link>
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="client-profile.html" className="avatar">
                              <img
                                alt=""
                                src={require("../assets/img/profiles/avatar-06.jpg")}
                              ></img>
                            </a>
                            <a href="client-profile.html">
                              {" "}
                              Rajnikant Sharma <span>Delivery Manager</span>
                            </a>
                          </h2>
                        </td>
                        <td>Rajnikant.Sharma@evolutyz.com</td>
                        <td>
                          <div className="dropdown action-label">
                            <Link
                              to
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              href="#"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success"></i>{" "}
                              Online
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success"></i>{" "}
                                Online
                              </Link>
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                                Offline
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <Link
                              to
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </Link>
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="client-profile.html" className="avatar">
                              <img
                                alt=""
                                src={require("../assets/img/profiles/avatar-14.jpg")}
                              ></img>
                            </a>
                            <a href="client-profile.html">
                              {" "}
                              Voonna Sowmya <span>QA Automation</span>
                            </a>
                          </h2>
                        </td>
                        <td>Sowmya.Voonna@evolutyz.com</td>
                        <td>
                          <Link to className="btn btn-white btn-sm btn-rounded">
                            <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                            Offline
                          </Link>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <Link
                              to
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </Link>
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer">
                <a href="clients.html">complete leading board</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h3 className="card-title mb-0">Recent Activity</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table custom-table mb-0">
                    <thead>
                      <tr>
                        <th>Activity Name </th>
                        <th>Progress</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2>
                            <a href="project-view.html">Emoji Quiz</a>
                          </h2>
                          <small className="block text-ellipsis">
                            <span>16</span>{" "}
                            <span className="text-muted">
                              Total Participants,{" "}
                            </span>
                            <span>30</span>{" "}
                            <span className="text-muted">Actual Members</span>
                          </small>
                        </td>
                        <td>
                          <div className="progress progress-xs progress-striped">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              data-toggle="tooltip"
                              title="65%"
                              style={{ width: "65%" }}
                            ></div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <Link
                              to
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </Link>
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2>
                            <a href="project-view.html">Friendship Day Event</a>
                          </h2>
                          <small className="block text-ellipsis">
                            <span>21</span>{" "}
                            <span className="text-muted">
                              Total Participants,{" "}
                            </span>
                            <span>68</span>{" "}
                            <span className="text-muted">Actual Members</span>
                          </small>
                        </td>
                        <td>
                          <div className="progress progress-xs progress-striped">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              data-toggle="tooltip"
                              title="15%"
                              style={{ width: "15%" }}
                            ></div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <Link
                              to
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </Link>
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2>
                            <a href="project-view.html">
                              Icream co-worker bonding
                            </a>
                          </h2>
                          <small className="block text-ellipsis">
                            <span>09</span>{" "}
                            <span className="text-muted">
                              Total Participants,{" "}
                            </span>
                            <span>10</span>{" "}
                            <span className="text-muted">Actual Members</span>
                          </small>
                        </td>
                        <td>
                          <div className="progress progress-xs progress-striped">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              data-toggle="tooltip"
                              title="49%"
                              style={{ width: "49%" }}
                            ></div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <Link
                              to
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </Link>
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2>
                            <a href="project-view.html">5k Run</a>
                          </h2>
                          <small className="block text-ellipsis">
                            <span>18</span>{" "}
                            <span className="text-muted">
                              Total Participants,{" "}
                            </span>
                            <span>42</span>{" "}
                            <span className="text-muted">Actual Members</span>
                          </small>
                        </td>
                        <td>
                          <div className="progress progress-xs progress-striped">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              data-toggle="tooltip"
                              title="88%"
                              style={{ width: "88%" }}
                            ></div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <Link
                              to
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </Link>
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2>
                            <a href="project-view.html">Independence Day</a>
                          </h2>
                          <small className="block text-ellipsis">
                            <span>27</span>{" "}
                            <span className="text-muted">
                              Total Participants,{" "}
                            </span>
                            <span>48</span>{" "}
                            <span className="text-muted">Actual Members</span>
                          </small>
                        </td>
                        <td>
                          <div className="progress progress-xs progress-striped">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              data-toggle="tooltip"
                              title="100%"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <Link
                              to
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link to className="dropdown-item" href="#">
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </Link>
                              <Link to className="dropdown-item" href="">
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer">
                <a href="projects.html">View all activities</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
