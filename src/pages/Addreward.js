import React from "react";
import { Link } from "react-router-dom";

function Addreward() {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col">
              <h3 className="page-title">Rewards Form</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  {/* <a href="index.html">Dashboard</a> */}
                  <Link to="/">
                  <span>Home</span>
                </Link>
                </li>
               
                <li className="breadcrumb-item active">Rewards Form</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-0">
              <div className="card-header">
                <h4 className="card-title mb-0">Rewards Form</h4>
              </div>
              <div className="card-body">
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="card-title">Rewards details</h4>
                      <div className="form-group form-border">
                        <label>Title:</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group form-border">
                        <label>Reward Mode:</label>
                        <select className="form-control">
                          <option value="1">Select Mode</option>
                          <option value="2">Yearly</option>
                          <option value="3">Monthly</option>
                          <option value="4">Weekly</option>
                        </select>
                      </div>
                      <div className="form-group form-border">
                        <label>Reward Description:</label>
                        <textarea
                          rows="5"
                          cols="5"
                          className="form-control"
                          placeholder="Enter message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4 className="card-title">&nbsp;</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-border">
                            <label>Reward start date:</label>
                            <input
                              type="date"
                              className="form-control"
                              onFocus="this.max=new Date().toISOString().split('T')[0]"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-border">
                            <label>Reward end date:</label>
                            <input
                              type="date"
                              className="form-control"
                              onFocus="this.min=new Date().toISOString().split('T')[0]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-md-12">
                          Rewards applicable for:
                        </label>
                        <div className="col-md-4 offset-md-2">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" name="checkbox" /> User
                              Role 1
                            </label>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" name="checkbox" /> User
                              Role 3
                            </label>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" name="checkbox" /> User
                              Role 5
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 offset-md-1">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" name="checkbox" /> User
                              Role 2
                            </label>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" name="checkbox" /> User
                              Role 4
                            </label>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" name="checkbox" /> User
                              Role 6
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>

                <div className="row">
                  <div className="col-md-12 my-2">
                    <div className="table-responsive">
                      <table className="table table-striped custom-table mb-0 datatable">
                        <thead>
                          <tr>
                            <th>Reward Title</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Reward Mode</th>
                            <th>Description</th>
                            <th>Applicable for</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Employee of Feb 2022</td>
                            <td>01 Feb 2022</td>
                            <td>01 Mar 2022</td>
                            <td>Second Half</td>
                            <td>Team Loyality</td>
                            <td>
                              <span>User Role 2</span>,<span>User Role 4</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Social media buff</td>
                            <td>15 Jun 2021</td>
                            <td>14 May 2021</td>
                            <td>Yearly</td>
                            <td>Linkedin, Twitter Posts</td>
                            <td>
                              <span>User Role 3</span>,<span>User Role 5</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Emoji quiz</td>
                            <td>13 Jan 2020</td>
                            <td>19 Jan 2020</td>
                            <td>7 days</td>
                            <td>Teams link</td>
                            <td>
                              <span>User Role 1</span>,<span>User Role 2</span>,
                              <span>User Role 3</span>
                            </td>
                          </tr>
                          <tr>
                            <td>5k Run</td>
                            <td>10 Jan 2019</td>
                            <td>16 Jan 2019</td>
                            <td>Weekly</td>
                            <td>Vizag</td>
                            <td>
                              <span>User Role 1</span>,<span>User Role 3</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Addreward;
