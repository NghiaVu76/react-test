import styles from "./Header.module.scss";

import classNames from "classnames/bind";
import { Button } from "rsuite";
// import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Header({ children }) {
  return (
    <div className={cx("header")}>
      <h1>{children}</h1>
      <div className={cx("header-actions")}>
        <Button className={cx("header-actions-save__button")}>Lưu lại</Button>
        <Button className={cx("header-actions-back__button")}>Quay lại</Button>
      </div>
    </div>
  );
}
