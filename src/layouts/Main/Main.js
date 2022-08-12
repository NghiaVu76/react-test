import React from "react";
import AddProducts from "../../pages/AddProduct/AddProduct";
import ProductList from "../../pages/CustomerList/CustomerList";
import styles from "./Main.module.scss";

import classNames from "classnames/bind";
import Carts from "../../pages/Orders/Orders";

const cx = classNames.bind(styles);

export default function Main() {
  return (
    <div className={cx("dashboard")}>
      <div className={cx("dashboard-content")} id="main-page">
        {/* <AddProducts /> */}
        {/* <ProductList /> */}
        <Carts></Carts>
      </div>
    </div>
  );
}
