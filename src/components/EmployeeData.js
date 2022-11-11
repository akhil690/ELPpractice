import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Dropdown } from "react-bootstrap";
function EmployeeData() {
  const [modal, setModal] = useState(false);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);
  return (
    <>
      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
        <div className="profile-widget">
          <div onClick={handleShow}>
            <div className="profile-img">
              <span className="avatar">
                <img
                  src={require("../assets/img/profiles/avatar-02.jpg")}
                  alt=""
                ></img>
              </span>
            </div>
            <h4 className="user-name m-t-10 mb-0 text-ellipsis">
              Sridhar Kambala
            </h4>
            <div className="small text-muted">Technical Manager</div>
          </div>
          <Dropdown className="profile-action" as="div">
            <Dropdown.Toggle
              className="nav-link action-icon"
              as="a"
              id="dropdown-basic1"
            >
              <i className="material-icons">more_vert</i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-right">
              <Dropdown.Item
                href="#"
                data-toggle="modal"
                data-target="#edit_employee"
              >
                <i className="fa fa-pencil m-r-5"></i> Edit
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                data-toggle="modal"
                data-target="#delete_employee"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
        <div className="profile-widget">
          <div onClick={handleShow}>
            <div className="profile-img">
              <span className="avatar">
                <img
                  src={require("../assets/img/profiles/avatar-09.jpg")}
                  alt=""
                ></img>
              </span>
            </div>
            <h4 className="user-name m-t-10 mb-0 text-ellipsis">
              Ganesh Varikuti
            </h4>
            <div className="small text-muted">Devops Engineer</div>
          </div>
          <div className="dropdown profile-action">
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
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#edit_employee"
              >
                <i className="fa fa-pencil m-r-5"></i> Edit
              </Link>
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_employee"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
        <div className="profile-widget">
          <div onClick={handleShow}>
            <div className="profile-img">
              <span className="avatar">
                <img
                  src={require("../assets/img/profiles/avatar-10.jpg")}
                  alt=""
                />
              </span>
            </div>
            <h4 className="user-name m-t-10 mb-0 text-ellipsis">
              Srikanth Guttula
            </h4>
            <div className="small text-muted">Android Developer</div>
          </div>
          <div className="dropdown profile-action">
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
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#edit_employee"
              >
                <i className="fa fa-pencil m-r-5"></i> Edit
              </Link>
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_employee"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
        <div className="profile-widget">
          <div className="profile-img">
            <a href="profile.html" className="avatar">
              <img
                src={require("../assets/img/profiles/avatar-05.jpg")}
                alt=""
              ></img>
            </a>
          </div>
          <div className="dropdown profile-action">
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
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#edit_employee"
              >
                <i className="fa fa-pencil m-r-5"></i> Edit
              </Link>
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_employee"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </Link>
            </div>
          </div>
          <h4 className="user-name m-t-10 mb-0 text-ellipsis">
            <a href="profile.html">Aditya Ramella</a>
          </h4>
          <div className="small text-muted">React Developer</div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
        <div className="profile-widget">
          <div className="profile-img">
            <a href="profile.html" className="avatar">
              <img
                src={require("../assets/img/profiles/avatar-11.jpg")}
                alt=""
              ></img>
            </a>
          </div>
          <div className="dropdown profile-action">
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
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#edit_employee"
              >
                <i className="fa fa-pencil m-r-5"></i> Edit
              </Link>
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_employee"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </Link>
            </div>
          </div>
          <h4 className="user-name m-t-10 mb-0 text-ellipsis">
            <a href="profile.html">Rajinikant Sharma</a>
          </h4>
          <div className="small text-muted">Team Leader</div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
        <div className="profile-widget">
          <div className="profile-img">
            <a href="profile.html" className="avatar">
              <img
                src={require("../assets/img/profiles/avatar-12.jpg")}
                alt=""
              ></img>
            </a>
          </div>
          <div className="dropdown profile-action">
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
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#edit_employee"
              >
                <i className="fa fa-pencil m-r-5"></i> Edit
              </Link>
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_employee"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </Link>
            </div>
          </div>
          <h4 className="user-name m-t-10 mb-0 text-ellipsis">
            <a href="profile.html">Srikanth Konduru</a>
          </h4>
          <div className="small text-muted">Fullstack Developer</div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
        <div className="profile-widget">
          <div className="profile-img">
            <a href="profile.html" className="avatar">
              <img
                src={require("../assets/img/profiles/avatar-13.jpg")}
                alt=""
              ></img>
            </a>
          </div>
          <div className="dropdown profile-action">
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
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#edit_employee"
              >
                <i className="fa fa-pencil m-r-5"></i> Edit
              </Link>
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_employee"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </Link>
            </div>
          </div>
          <h4 className="user-name m-t-10 mb-0 text-ellipsis">
            <a href="profile.html">Sai Paturi</a>
          </h4>
          <div className="small text-muted">QA Lead</div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
        <div className="profile-widget">
          <div className="profile-img">
            <a href="profile.html" className="avatar">
              <img
                src={require("../assets/img/profiles/avatar-01.jpg")}
                alt=""
              ></img>
            </a>
          </div>
          <div className="dropdown profile-action">
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
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#edit_employee"
              >
                <i className="fa fa-pencil m-r-5"></i> Edit
              </Link>
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_employee"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </Link>
            </div>
          </div>
          <h4 className="user-name m-t-10 mb-0 text-ellipsis">
            <a href="profile.html">Arushi Patro</a>
          </h4>
          <div className="small text-muted">Intern</div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
        <div className="profile-widget">
          <div className="profile-img">
            <a href="profile.html" className="avatar">
              <img
                src={require("../assets/img/profiles/avatar-16.jpg")}
                alt=""
              ></img>
            </a>
          </div>
          <div className="dropdown profile-action">
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
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#edit_employee"
              >
                <i className="fa fa-pencil m-r-5"></i> Edit
              </Link>
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_employee"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </Link>
            </div>
          </div>
          <h4 className="user-name m-t-10 mb-0 text-ellipsis">
            <a href="profile.html">Solman Tanuku</a>
          </h4>
          <div className="small text-muted">Azure Developer</div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
        <div className="profile-widget">
          <div className="profile-img">
            <a href="profile.html" className="avatar">
              <img
                src={require("../assets/img/profiles/avatar-04.jpg")}
                alt=""
              ></img>
            </a>
          </div>
          <div className="dropdown profile-action">
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
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#edit_employee"
              >
                <i className="fa fa-pencil m-r-5"></i> Edit
              </Link>
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_employee"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </Link>
            </div>
          </div>
          <h4 className="user-name m-t-10 mb-0 text-ellipsis">
            <a href="profile.html">Dungi Pravalika Reddy</a>
          </h4>
          <div className="small text-muted">Database Engineer</div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
        <div className="profile-widget">
          <div className="profile-img">
            <a href="profile.html" className="avatar">
              <img
                src={require("../assets/img/profiles/avatar-03.jpg")}
                alt=""
              ></img>
            </a>
          </div>
          <div className="dropdown profile-action">
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
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#edit_employee"
              >
                <i className="fa fa-pencil m-r-5"></i> Edit
              </Link>
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_employee"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </Link>
            </div>
          </div>
          <h4 className="user-name m-t-10 mb-0 text-ellipsis">
            <a href="profile.html">Suma Hanumanthu</a>
          </h4>
          <div className="small text-muted">Onboarding Specialist</div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
        <div className="profile-widget">
          <div className="profile-img">
            <a href="profile.html" className="avatar">
              <img
                src={require("../assets/img/profiles/avatar-08.jpg")}
                alt=""
              ></img>
            </a>
          </div>
          <div className="dropdown profile-action">
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
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#edit_employee"
              >
                <i className="fa fa-pencil m-r-5"></i> Edit
              </Link>
              <Link
                to
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#delete_employee"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </Link>
            </div>
          </div>
          <h4 className="user-name m-t-10 mb-0 text-ellipsis">
            <a href="profile.html">Shalini Vinolia</a>
          </h4>
          <div className="small text-muted">People Management HR</div>
        </div>
      </div>
      <Modal
        show={modal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <div className="modal-content p-2">
          <div className="modal-heading">
            <h2>Sridhar Kambala </h2>
            <span className="popDown" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </span>
          </div>
          <div className="modalBody">
            <div className="profile">
              <img
                src={require("../assets/img/profiles/avatar-02.jpg")}
                alt="EITS1616"
              />
              <h5>
                <strong>
                  <i className="fa fa-address-card"></i> EITS1616
                </strong>
              </h5>
            </div>
            <div className="infos">
              <ul className="personal-info">
                <li>
                  <div className="text">
                    <i className="fa fa-envelope"></i>{" "}
                    sridhar.kambala@evolutyz.com
                  </div>
                </li>
                <li>
                  <div className="text">
                    <i className="fa fa-mobile"></i> 8767960625
                  </div>
                </li>
                <li>
                  <div className="text">
                    <i className="fa fa-trophy"></i> Spot Award
                  </div>
                </li>
                <li>
                  <div className="text">
                    <i className="la la-award"></i> 500
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default EmployeeData;
