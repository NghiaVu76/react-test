import styles from "./Footer.module.scss";
// import { socialIcons } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("footer-content")}>
        <div className={cx("footer-title")}>
          © 2022 VnSolution. All rights reserved.
        </div>
        <div className="footer-group"></div>
      </div>
    </div>
  );
}
