import React from "react";
import { Button } from "rsuite";
import PropTypes from "prop-types";
import { Drawer } from "rsuite";

export default function DrawerFilter(props) {
  const { placement, show, onHide, onHandleFilter, children } = props;

  return (
    <Drawer placement={placement} show={show} onHide={onHide}>
      <Drawer.Header>
        <Drawer.Title>Lọc đơn hàng</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>{children}</Drawer.Body>
      {/* <Drawer.Footer>
        <Button onClick={onHide} appearance="primary">
          Lọc
        </Button>
        <Button onClick={onHide}>Hủy</Button>
      </Drawer.Footer> */}
    </Drawer>
  );
}

DrawerFilter.propTypes = {
  placement: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};
