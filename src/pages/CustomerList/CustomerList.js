import Footer from "../../components/Footer/Footer";
import Table from "../../components/Table/Table";
import Filter from "../../components/Filter/Filter";
import TableHeader from "../../components/Header/TableHeader/TableHeader";

import classNames from "classnames/bind";
import styles from "./CustomerList.module.scss";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
// import useDebounce from "../../hooks/useDebounce";
const cx = classNames.bind(styles);

export default function CustomerList() {
  const [productList, setProductList] = useState([]);

  const [dataList, setDataList] = useState([]);

  var filterProductList = [];

  useEffect(() => {
    fetch("https://random-data-api.com/api/device/random_device?size=30")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setProductList(json);
      });
  }, []);

  const useHandleFilter = (values) => {
    const debouncedValues = useDebounce(values, 1000);
    useEffect(() => {
      for (let i = 0; i < productList.length; i++) {
        if (
          (productList[i].model
            .toLowerCase()
            .includes(
              debouncedValues.model ? debouncedValues.model.toLowerCase() : ""
            ) ||
            !debouncedValues.model) &&
          (productList[i].platform
            .toLowerCase()
            .includes(
              debouncedValues.platform
                ? debouncedValues.platform.toLowerCase()
                : ""
            ) ||
            !debouncedValues.platform)
        ) {
          filterProductList.push(productList[i]);
        }
      }
      setDataList(filterProductList);
      filterProductList = [];
      console.log(debouncedValues);
    }, [debouncedValues]);
    // console.log(JSON.stringify(values, 0, 2));
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("product-list")}>
        <div className={cx("container")}>
          <TableHeader>Danh sách sản phẩm</TableHeader>
          <div className={cx("content")}>
            <Filter data={productList} handleFilter={useHandleFilter}></Filter>
            <Table
              data={dataList.length === 0 ? productList : dataList}
            ></Table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
