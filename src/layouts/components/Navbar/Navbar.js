import React from "react";
import {
  faBarsStaggered,
  faBell,
  faBellConcierge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("token"));
  console.log(user);
  const userName = user.firstName + " " + user.lastName;

  return (
    <div>
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-left-content">
            <div className="navbar-left-content-logo">
              <a href="/">CRUD</a>
            </div>
            <div className="navbar-left-content-bars">
              <FontAwesomeIcon
                className="navbar-left-content-bars-icon"
                icon={faBarsStaggered}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className="navbar-right-content">
            <div className="navbar-actions">
              <FontAwesomeIcon className="navbar-actions-icon" icon={faBell} />
            </div>
            <div className="navbar-user">
              <span className="user-name">{userName}</span>
              <img
                src="https://kenh14cdn.com/2019/2/15/8-15502075818842118741287.jpg"
                alt="ảnh"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="separator"></div>
    </div>
  );
}
