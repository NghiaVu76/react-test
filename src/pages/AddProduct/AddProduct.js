import FormHeader from "../../components/Header/FormHeader/FormHeader";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

import classNames from "classnames/bind";
import styles from "./AddProduct.module.scss";
import { data } from "../../constants";
console.log("data", data);

const cx = classNames.bind(styles);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  console.log(2);
};

export default function AddProducts() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("add-products")}>
        <div className={cx("container")}>
          <FormHeader onSubmit={onSubmit}>Thêm mới sản phẩm</FormHeader>
          <div className={cx("content")}>
            <Form data={data} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
