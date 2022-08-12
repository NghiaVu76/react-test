import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Orders.module.scss";
import Footer from "../../components/Footer/Footer";

import Table from "../../components/Table/Table";
import TableHeader from "../../components/Header/TableHeader/TableHeader";
import useDebounce from "../../hooks/useDebounce";
import OrderFilter from "../../components/Filter/OrderFilter";
import AddOrderModal from "../../components/Modal/AddOrderModal";

const cx = classNames.bind(styles);

export default function Orders() {
  const [isShowAddModal, setShowAddModal] = useState(false);

  var filterCartList = [];
  var orderList = JSON.parse(localStorage.getItem("orderList"));
  const [data, setData] = useState(orderList);

  const useHandleFilter = (values) => {
    const debouncedValues = useDebounce(values, 1000);
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

  const handleSubmit = (values) => {
    console.log("values", values);
    // const debouncedValues = useDebounce(values, 1500);
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
  };

  const addOrder = () => {
    setShowAddModal(true);
  };

  const closeAddOrderModal = () => {
    setShowAddModal(false);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("add-products")}>
        <div className={cx("container")}>
          <TableHeader>Đơn hàng</TableHeader>
          <div className={cx("content")}>
            <OrderFilter onAddOrder={addOrder} handleFilter={useHandleFilter} />
            <Table data={data} />
            {isShowAddModal && (
              <AddOrderModal
                show={isShowAddModal}
                onHide={closeAddOrderModal}
                onSubmit={handleSubmit}
                overflow={true}
              ></AddOrderModal>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
