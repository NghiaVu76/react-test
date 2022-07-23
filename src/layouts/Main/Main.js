import React from "react";
import AddProducts from "../../pages/AddProducts/AddProducts";
import ProductList from "../../pages/ProductList/ProductList";
import styles from "./Main.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Main() {
  return (
    <div className={cx("dashboard")}>
      <div className={cx("dashboard-content")} id="main-page">
        {/* <AddProducts /> */}
        <ProductList />
      </div>
    </div>
  );
}
