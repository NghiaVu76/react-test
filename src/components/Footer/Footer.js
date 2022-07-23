import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

import { Icon } from "rsuite";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("footer-content")}>
        <div className={cx("footer-title")}>
          © 2022 VnSolution. All rights reserved.
        </div>
        <div className={cx("footer-group")}>
          <Icon icon="facebook" />
          <Icon icon="twitter" />
          <Icon icon="instagram" />
          <Icon icon="github" />
        </div>
      </div>
    </div>
  );
}
