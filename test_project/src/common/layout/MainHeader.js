import React from "react";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand">Financial Ledger</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default MainHeader;
