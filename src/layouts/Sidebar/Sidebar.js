import {
  faCartFlatbed,
  faDatabase,
  faSquarePollVertical,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.scss";
import { Button, Nav, Sidenav } from "rsuite";
// import { DashboardIcon } from "@rsuite/icons/Dashboard";

export default function Sidebar() {
  return (
    <Sidenav className="sidebar" activeKey="1">
      <div className="sidebar-top">
        <div className="sidebar-top-content">
          <Sidenav.Header className="sidebar-top-header">
            <Nav className="sidebar-top-header-content">
              <Nav.Item
                className="sidebar-top-header-content-item"
                eventKey="1"
              >
                <FontAwesomeIcon
                  className="sidebar-top-header-content-icon"
                  icon={faSquarePollVertical}
                />

                <div className="sidebar-top-header-content-text">
                  Bảng điều khiển
                </div>
              </Nav.Item>
            </Nav>
          </Sidenav.Header>
          <Sidenav.Body className="sidebar-top-body">
            <Nav className="sidebar-top-body-nav">
              <Nav.Item className="sidebar-top-body-nav-item" eventKey="2">
                <FontAwesomeIcon
                  className="sidebar-top-body-nav-icon"
                  icon={faDatabase}
                ></FontAwesomeIcon>
                <div className="sidebar-top-body-nav-text">
                  Danh sách sản phẩm
                </div>
              </Nav.Item>
              <Nav.Item
                className="sidebar-top-body-nav-item"
                eventKey="3"
                icon={
                  <FontAwesomeIcon
                    className="sidebar-top-body-nav-icon"
                    icon={faUsers}
                  ></FontAwesomeIcon>
                }
              >
                <div className="sidebar-top-body-nav-text">Khách hàng</div>
              </Nav.Item>
              <Nav.Item
                className="sidebar-top-body-nav-item"
                eventKey="4"
                icon={
                  <FontAwesomeIcon
                    className="sidebar-top-body-nav-icon"
                    icon={faCartFlatbed}
                  />
                }
              >
                <div className="sidebar-top-body-nav-text">Đơn hàng</div>
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
        </div>
      </div>
      <div className="sidebar-bottom">
        <Button className="sidebar-bottom-button">
          Thu gọn
        </Button>
      </div>
    </Sidenav>
  );
}
