import styles from "./AddOrderForm.module.scss";
import PropTypes from "prop-types";

import { Form as FinalForm, Field } from "react-final-form";
import {
  Form as RsuiteForm,
  FormGroup,
  ControlLabel,
  Button,
  ButtonGroup,
} from "rsuite";
import classNames from "classnames/bind";
import { InputPickerField, InputField } from "../../FinalFormComponents";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

const required = (value) =>
  value ? undefined : "Không được bỏ qua trường này";

export default function AddOrderForm(props) {
  const { onSubmit, onHide, data } = props;
  console.log(data);

  const { customerData, productList } = data;

  const onHandleFormSubmit = (form) => {
    form.submit();
    console.log("done");
    onSubmit();
  };

  const onReset = (form) => {
    form.reset();
  };

  var customerNameList = [];
  var productNameList = [];
  var productId = "",
    quantity = 0,
    price = 0;

  const getUserNameData = () => {
    let listData = [];
    for (let i = 0; i < customerData.length; i++) {
      listData.push(customerData[i].firstName + " " + customerData[i].lastName);
      // console.log("userNameList", listData);
    }
    customerNameList = listData.map((item) => ({ label: item, value: item }));
    console.log("customerNameList", customerNameList);
  };

  const getProductList = () => {
    let listProduct = [];
    for (let i = 0; i < productList.length; i++) {
      listProduct.push(productList[i].title);
      // console.log("listProductName", listProduct);
    }
    productNameList = listProduct.map((item) => ({ label: item, value: item }));
    console.log("productNameList", productNameList);
  };

  getUserNameData();
  getProductList();

  const onChangeUser = (value, form) => {
    // console.log("onChangeUser", value);
    for (let i = 0; i < customerData.length; i++) {
      if (
        value ===
        customerData[i].firstName + " " + customerData[i].lastName
      ) {
        let phoneNumber = data.customerData[i].phone;
        let address =
          customerData[i].address.address + ", " + customerData[i].address.city;
        form.change("phoneNumber", phoneNumber);
        form.change("address", address);
      } else if (value === null) {
        form.change("phoneNumber", "");
        form.change("address", "");
      }
    }
  };

  const onChangeProduct = (value, form) => {
    // console.log("onChangeProduct", value);
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].title === value) {
        productId = productList[i].id;
        quantity = productList[i].stock;
        price = productList[i].price;
        form.change("productId", productId);
        form.change("quantity", quantity);
        form.change("price", price);
      } else if (value === null) {
        form.change("productId", "");
        form.change("quantity", "");
        form.change("price", "");
      }
    }
  };

  return (
    <FinalForm
      onSubmit={onSubmit}
      //   initialValues={data}
      render={({ handleSubmit, values, submitting, pristine, form }) => {
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
            <RsuiteForm
              className={cx("form")}
              onSubmit={handleSubmit}
              id="form"
            >
              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <ControlLabel>Mã đơn hàng*</ControlLabel>
                  <Field
                    name="orderId"
                    component={InputField}
                    placeholder=" "
                    validate={required}
                    control
                  />
                </div>
              </FormGroup>

              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <ControlLabel>Tên khách hàng*</ControlLabel>
                  <Field
                    className={cx("form-group-field-select")}
                    name="customerName"
                    component={InputPickerField}
                    inputClassname="input-picker"
                    validate={required}
                    inputValue={customerNameList}
                    placeholder="Chọn"
                    control
                    onChange={(value) => onChangeUser(value, form)}
                  />
                </div>
              </FormGroup>

              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <ControlLabel>Số điện thoại</ControlLabel>
                  <Field
                    name="phoneNumber"
                    component={InputField}
                    //   options={data}
                    control
                  />
                </div>
              </FormGroup>

              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <ControlLabel>Địa chỉ giao hàng</ControlLabel>
                  <Field
                    className={cx("form-group-field-select")}
                    name="address"
                    component={InputField}
                    control
                  />
                </div>
              </FormGroup>

              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <ControlLabel>Mã sản phẩm</ControlLabel>
                  <Field
                    name="productId"
                    component={InputField}
                    placeholder=" "
                    // value={values.productId}
                    control
                  />
                </div>
              </FormGroup>

              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <ControlLabel>Tên sản phẩm*</ControlLabel>
                  <Field
                    name="productName"
                    component={InputPickerField}
                    validate={required}
                    placeholder="Chọn"
                    inputValue={productNameList}
                    control
                    onChange={(value) => onChangeProduct(value, form)}
                  />
                </div>
              </FormGroup>

              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <ControlLabel>Số lượng</ControlLabel>
                  <Field
                    name="quantity"
                    type="number"
                    component={InputField}
                    value={`${quantity}`}
                    control
                  />
                </div>
              </FormGroup>

              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <ControlLabel>Đơn giá sản phẩm</ControlLabel>
                  <Field
                    name="price"
                    component={InputField}
                    placeholder=" "
                    control
                  />
                  {/* <Error name="price" /> */}
                </div>
              </FormGroup>

              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <ControlLabel>Thành tiền</ControlLabel>
                  <Field
                    name="totalPrice"
                    component={InputField}
                    placeholder=" "
                    inputclassname="form-group-field-input"
                    control
                  />
                  {/* <Error name="totalPrice" /> */}
                </div>
              </FormGroup>
              <ButtonGroup className={cx("button-group")}>
                <Button
                  className={cx("button")}
                  disabled={submitting || pristine}
                  appearance="primary"
                  color="green"
                  onClick={() => onHandleFormSubmit(form)}
                >
                  Lưu
                </Button>
                <Button
                  className={cx("button")}
                  onClick={() => onReset(form)}
                  appearance="primary"
                >
                  Làm mới
                </Button>
                <Button
                  className={cx("button")}
                  onClick={onHide}
                  appearance="primary"
                  color="red"
                >
                  Hủy
                </Button>
              </ButtonGroup>
            </RsuiteForm>
          </div>
        );
      }}
    />
  );
}

AddOrderForm.propTypes = {
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
};
