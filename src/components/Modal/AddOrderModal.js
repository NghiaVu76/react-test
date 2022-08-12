import React, { useEffect, useState } from "react";
import { Modal } from "rsuite";
import AddOrderForm from "../Form/AddOrderForm/AddOrderForm";
import "./AddOrderModal.module.scss";

export default function AddOrderModal(props) {
  const { show, onHide, overflow, onSubmit } = props;
  const [customerData, setCustomerData] = useState([]);
  // const [data, setData] = useState({});
  const [productList, setProductList] = useState([]);

  const getAllUsers = async () => {
    await fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        setCustomerData(res.users);
      })
      .catch((err) => console.log("error", err));
  };

  const getAllProducts = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
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
        <Modal.Title>THÊM MỚI ĐƠN HÀNG</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddOrderForm
          onSubmit={onSubmit}
          onHide={onHide}
          data={data}
        ></AddOrderForm>
      </Modal.Body>
    </Modal>
  );
}
