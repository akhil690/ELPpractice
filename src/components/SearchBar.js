import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="row filter-row">
      <div className="col-sm-6 col-md-3">
        <div className="form-group form-focus">
          <input
            type="text"
            className="form-control floating"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <label className="focus-label">Employee ID</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="form-group form-focus">
          <input
            type="text"
            className="form-control floating"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <label className="focus-label">Employee Name</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="form-group form-focus select-focus">
          <select className="select form-control">
            <option>Select Department</option>
            <option>Recruiters</option>
            <option>Human Resource</option>
            <option>QA</option>
            <option>Developers</option>
            <option>Devops</option>
          </select>
          <label className="focus-label">Department</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <Link to href="#" className="btn btn-success btn-block">
          {" "}
          Search{" "}
        </Link>
      </div>
    </div>
  );
}

export default SearchBar;
