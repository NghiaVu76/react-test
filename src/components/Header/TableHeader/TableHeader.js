import styles from "./TableHeader.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function TableHeader({ children }) {
  return (
    <div className={cx("header")}>
      <h1>{children}</h1>
    </div>
  );
}
