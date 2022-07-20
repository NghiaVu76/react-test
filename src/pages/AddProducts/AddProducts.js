import AddProduct from "../../components/AddProduct/AddProduct";
import Footer from "../../components/Footer/Footer";
import styles from "./AddProducts.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function AddProducts() {
  return (
    <div className={cx("wrapper")}>
      <AddProduct />
      <Footer />
    </div>
  );
}
