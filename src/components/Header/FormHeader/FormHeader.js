import styles from "./FormHeader.module.scss";
import PropTypes from "prop-types";

import classNames from "classnames/bind";
import { Button } from "rsuite";
// import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function FormHeader({ children, onSubmit }) {
  return (
    <div className={cx("header")}>
      <h1>{children}</h1>
      <div className={cx("header-actions")}>
        <Button
          className={cx("header-actions-save__button")}
          onClick={onSubmit}
        >
          Lưu lại
        </Button>
        <Button className={cx("header-actions-back__button")}>Quay lại</Button>
      </div>
    </div>
  );
}

FormHeader.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
