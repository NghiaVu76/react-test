import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <div className={cx("homepage")}>
        <Sidebar></Sidebar>
        <div className={cx("dashboard")}>
          <div className={cx("dashboard-content")} id="main-page">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
