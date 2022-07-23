import Footer from "../../components/Footer/Footer";
import Table from "../../components/Table/Table";
import Filter from "../../components/Filter/Filter";
import TableHeader from "../../components/Header/TableHeader/TableHeader";
import { Button } from "rsuite";

import classNames from "classnames/bind";
import styles from "./ProductList.module.scss";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

const onFilter = () => {
  console.log(2);
};

export default function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://random-data-api.com/api/device/random_device?size=20")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProductList(json);
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("product-list")}>
        <div className={cx("container")}>
          <TableHeader>Danh sách sản phẩm</TableHeader>
          <div className={cx("content")}>
            <Filter data={productList} handleFilter={onFilter}></Filter>

            <Table data={productList}></Table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
