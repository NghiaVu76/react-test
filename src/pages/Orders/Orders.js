import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Orders.module.scss";
import Footer from "../../components/Footer/Footer";

import Table from "../../components/Table/Table";
import TableHeader from "../../components/Header/TableHeader/TableHeader";
import useDebounce from "../../hooks/useDebounce";
import OrderFilter from "../../components/Filter/OrderFilter";
import AddOrderModal from "../../components/Modal/AddOrderModal";
import UpdateOrderModal from "../../components/Modal/UpdateOrderModal";
import { Alert } from "rsuite";

const cx = classNames.bind(styles);

export default function Orders() {
  const [isShowAddModal, setShowAddModal] = useState(false);
  const [isShowUpdateModal, setShowUpdateModal] = useState(false);
  const [rowData, setRowData] = useState({});

  var filterCartList = [];
  var orderList = JSON.parse(localStorage.getItem("orderList"));
  const [data, setData] = useState(orderList);

  const useHandleFilter = (values) => {
    const debouncedValues = useDebounce(values, 1000);
    console.log(debouncedValues);
    useEffect(() => {
      for (let i = 0; i < orderList.length; i++) {
        if (
          (orderList[i].productId === debouncedValues.productId
            ? debouncedValues.productId
            : "" || !debouncedValues.productId) &&
          (orderList[i].customerName
            .toLowerCase()
            .includes(
              debouncedValues.customerName
                ? debouncedValues.customerName.toLowerCase()
                : ""
            ) ||
            !debouncedValues.customerName) &&
          (orderList[i].productName
            .toLowerCase()
            .includes(
              debouncedValues.productName
                ? debouncedValues.productName.toLowerCase()
                : ""
            ) ||
            !debouncedValues.productName)
        ) {
          filterCartList.push(orderList[i]);
        }
      }
      setData(filterCartList);
      filterCartList = [];
      console.log(debouncedValues);
    }, [debouncedValues]);
    // console.log(JSON.stringify(values, 0, 2));
  };

  const handleSubmitAndAddOrder = (values) => {
    console.log("values", values);
    // const debouncedValues = useDebounce(values, 1500);
    if (values) {
      let orderId = values.orderId;
      let customerName = values.customerName;
      let phoneNumber = values.phoneNumber;
      let address = values.address;
      let productId = values.productId;
      let productName = values.productName;
      let quantity = values.quantity;
      let price = values.price;
      let totalPrice = values.price * values.quantity;

      let order = {
        orderId,
        customerName,
        phoneNumber,
        address,
        productId,
        productName,
        quantity,
        price,
        totalPrice,
      };

      console.log("order", order);

      orderList.push(order);

      localStorage.setItem("orderList", JSON.stringify(orderList));
      console.log("orderList", orderList);
      setData(orderList);
      Alert.success("Thêm thành công !");
    } else {
      Alert.error("Thêm thất bại !");
    }
  };

  const addOrder = () => {
    setShowAddModal(true);
  };

  const closeModal = () => {
    setShowAddModal(false);
    setShowUpdateModal(false);
  };

  const onDelete = (rowData) => {
    console.log("delete");
    console.log(rowData);
    for (let i = 0; i < orderList.length; i++) {
      if (orderList[i].orderId === rowData.orderId) {
        orderList.splice(i, 1);
      }
    }
    localStorage.setItem("orderList", JSON.stringify(orderList));
    setData(orderList);
  };

  const onUpdate = (rowData) => {
    setShowUpdateModal(true);
    setRowData(rowData);
  };

  const handleSubmitAndUpdateOrder = (values) => {
    console.log(values);
    if (values) {
      let orderId = values.orderId;
      let customerName = values.customerName;
      let phoneNumber = values.phoneNumber;
      let address = values.address;
      let productId = values.productId;
      let productName = values.productName;
      let quantity = values.quantity;
      let price = values.price;
      let totalPrice = values.price * values.quantity;

      let cart = {
        orderId,
        customerName,
        phoneNumber,
        address,
        productId,
        productName,
        quantity,
        price,
        totalPrice,
      };

      for (let i = 0; i < orderList.length; i++) {
        if (orderList[i].orderId === cart.orderId) {
          orderList.splice(i, 1, cart);
        }
      }
      console.log(orderList);
      localStorage.setItem("orderList", JSON.stringify(orderList));
      setData(orderList);
      Alert.success("Cập nhật thành công !");
    } else {
      Alert.error("Cập nhật thất bại !");
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("add-products")}>
        <div className={cx("container")}>
          <TableHeader>Đơn hàng</TableHeader>
          <div className={cx("content")}>
            <OrderFilter
              onAddOrder={addOrder}
              handleFilter={useHandleFilter}
              onHide={closeModal}
            />
            <Table
              data={data || orderList}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
            {isShowAddModal && (
              <AddOrderModal
                show={isShowAddModal}
                onHide={closeModal}
                onSubmit={handleSubmitAndAddOrder}
                overflow={true}
              ></AddOrderModal>
            )}
            {isShowUpdateModal && (
              <UpdateOrderModal
                show={isShowUpdateModal}
                onHide={closeModal}
                overflow={true}
                onSubmit={handleSubmitAndUpdateOrder}
                rowData={rowData}
              ></UpdateOrderModal>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
