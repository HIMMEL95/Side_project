import React, { useState } from "react";

import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MainHeader.css";

const MainHeader = () => {
  const [userIsOpen, setUserIsOpen] = useState(false);

  const openUserHandler = () => {
    setUserIsOpen(true);
  };

  const closeUserHandler = () => {
    setUserIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Side Project
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarScroll"
          style={{ width: "100%", display: "contents !important" }}
        >
          <div className="navWrapper">
            <ul className="nav navbar-nav nav-underline navbar-nav-scroll justify-content-center">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div className="userWrapper">
            <FontAwesomeIcon icon={faCircleUser} onClick={openUserHandler} />
            <div class="collapse" id="collapseExample">
              <div class="card card-body">로그아웃</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
