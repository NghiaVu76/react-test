import {
  faCartFlatbed,
  faDatabase,
  faSquarePollVertical,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Sidebar.scss";
import { Button, Nav, Sidenav } from "rsuite";
// import { DashboardIcon } from "@rsuite/icons/Dashboard";
// import "rsuite/dist/styles/rsuite-default.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <div className={cx("sidebar")}>
      <Sidenav className={cx("sidebar-wrapper")} activeKey="1">
        <div className={cx("sidebar-top")}>
          <div className={cx("sidebar-top-content")}>
            <Sidenav.Header className={cx("sidebar-top-header")}>
              <Nav className={cx("sidebar-top-header-content")}>
                <Nav.Item
                  className={cx("sidebar-top-header-content-item")}
                  eventKey="1"
                >
                  <FontAwesomeIcon
                    className={cx("sidebar-top-header-content-icon")}
                    icon={faSquarePollVertical}
                  />

                  <div className={cx("sidebar-top-header-content-text")}>
                    Bảng điều khiển
                  </div>
                </Nav.Item>
              </Nav>
            </Sidenav.Header>
            <Sidenav.Body className={cx("sidebar-top-body")}>
              <Nav className={cx("sidebar-top-body-nav")}>
                <Nav.Item
                  className={cx("sidebar-top-body-nav-item")}
                  eventKey="2"
                >
                  <FontAwesomeIcon
                    className={cx("sidebar-top-body-nav-icon")}
                    icon={faDatabase}
                  ></FontAwesomeIcon>
                  <div className={cx("sidebar-top-body-nav-text")}>
                    Danh sách sản phẩm
                  </div>
                </Nav.Item>
                <Nav.Item
                  className={cx("sidebar-top-body-nav-item")}
                  eventKey="3"
                  icon={
                    <FontAwesomeIcon
                      className={cx("sidebar-top-body-nav-icon")}
                      icon={faUsers}
                    ></FontAwesomeIcon>
                  }
                >
                  <div className={cx("sidebar-top-body-nav-text")}>
                    Khách hàng
                  </div>
                </Nav.Item>
                <Nav.Item
                  className={cx("sidebar-top-body-nav-item")}
                  eventKey="4"
                  icon={
                    <FontAwesomeIcon
                      className={cx("sidebar-top-body-nav-icon")}
                      icon={faCartFlatbed}
                    />
                  }
                >
                  <div className={cx("sidebar-top-body-nav-text")}>
                    Đơn hàng
                  </div>
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </div>
        </div>
        <div className={cx("sidebar-bottom-nav-text")}>
          <Button className={cx("sidebar-bottom-button")}>Thu gọn</Button>
        </div>
      </Sidenav>
    </div>
  );
}
