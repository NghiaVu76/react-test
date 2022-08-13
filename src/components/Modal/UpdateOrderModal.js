import React, { useEffect, useState } from "react";
import { Modal } from "rsuite";
import AddOrderForm from "../Form/AddOrderForm/AddOrderForm";
import UpdateOrderForm from "../Form/AddOrderForm/UpdateOrderForm";
import "./AddOrderModal.module.scss";
import PropTypes from "prop-types";

export default function UpdateOrderModal(props) {
  const { show, onHide, overflow, onSubmit, rowData } = props;
  const [customerData, setCustomerData] = useState([]);
  // const [data, setData] = useState({});
  const [productList, setProductList] = useState([]);

  const getAllUsers = async () => {
    await fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => {
        // console.log("res", res);
        setCustomerData(res.users);
      })
      .catch((err) => console.log("error", err));
  };

  const getAllProducts = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        // console.log("res", res);
        setProductList(res.products);
      })
      .catch((err) => console.log("error", err));
  };

  useEffect(() => {
    getAllUsers();
    getAllProducts();
  }, []);

  const data = {
    customerData,
    productList,
  };

  return (
    <Modal show={show} onHide={onHide} overflow={overflow} size="md">
      <Modal.Header>
        <Modal.Title>CẬP NHẬT ĐƠN HÀNG</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UpdateOrderForm
          onSubmit={onSubmit}
          onHide={onHide}
          data={data}
          initialValues={rowData}
        ></UpdateOrderForm>
      </Modal.Body>
    </Modal>
  );
}

UpdateOrderForm.propTypes = {
  show: PropTypes.bool.isRequired,
  overflow: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  rowData: PropTypes.object.isRequired,
};
