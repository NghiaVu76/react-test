import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Table as RSuiteTable } from "rsuite";

import styles from "./Table.module.scss";
import classNames from "classnames/bind";
import "rsuite/dist/styles/rsuite-default.css";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";

const cx = classNames.bind(styles);
const { Column, HeaderCell, Cell, Pagination } = RSuiteTable;

export default function Table({ data }) {
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  // const tableData = data.filter((v, i) => {
  //   const start = limit * (page - 1);
  //   const end = start + limit;
  //   return i >= start && i < end;
  // });

  return (
    <div>
      <RSuiteTable
        data={data || []}
        onRowClick={(data) => {
          console.log(data);
        }}
        autoHeight
        wordWrap
        loading={loading}
        affixHorizontalScrollbar
      >
        <Column width={70} fixed align="center">
          <HeaderCell>STT</HeaderCell>
          <Cell className={cx("special-cell")} dataKey="id">
            {(rowData) => data.indexOf(rowData) + 1}
          </Cell>
        </Column>

        <Column width={150} align="center" fixed>
          <HeaderCell>MÃ ĐƠN HÀNG</HeaderCell>
          <Cell dataKey="orderId" />
        </Column>

        <Column width={200} align="center">
          <HeaderCell>TÊN KHÁCH HÀNG</HeaderCell>
          <Cell dataKey="customerName" />
        </Column>

        <Column width={150} align="center">
          <HeaderCell>SỐ ĐIỆN THOẠI</HeaderCell>
          <Cell dataKey="phoneNumber" />
        </Column>

        <Column width={300} align="center">
          <HeaderCell>ĐỊA CHỈ GIAO HÀNG</HeaderCell>
          <Cell dataKey="address" />
        </Column>

        <Column width={120} align="center">
          <HeaderCell>MÃ SẢN PHẨM</HeaderCell>
          <Cell dataKey="productId" />
        </Column>

        <Column width={250} align="center">
          <HeaderCell>TÊN SẢN PHẨM</HeaderCell>
          <Cell dataKey="productName" />
        </Column>

        <Column width={100} align="center">
          <HeaderCell>SỐ LƯỢNG</HeaderCell>
          <Cell dataKey="quantity" />
        </Column>

        <Column width={150} align="center">
          <HeaderCell>ĐƠN GIÁ SẢN PHẨM</HeaderCell>
          <Cell dataKey="price" />
        </Column>

        <Column width={150} align="center">
          <HeaderCell>THÀNH TIỀN</HeaderCell>
          <Cell dataKey="totalPrice" />
        </Column>

        {/* <Column width={100} align="center">
          <HeaderCell>CHỨC NĂNG</HeaderCell>
          <Cell>
            {(rowData) => {
              function handleAction() {
                alert(`id:${rowData.id}`);
              }
              return (
                <span>
                  <Link to="/add_products">Edit</Link>
                  <Button onClick={handleAction}> Remove </Button>
                </span>
              );
            }}
          </Cell>
        </Column> */}
      </RSuiteTable>

      <div style={{ padding: 20 }}>
        <Pagination
          lengthMenu={[
            {
              value: 10,
              label: 10,
            },
            {
              value: 20,
              label: 20,
            },
          ]}
          activePage={page}
          displayLength={limit}
          // total={data.length}
          onChangePage={setPage}
          onChangeLength={handleChangeLimit}
        />
      </div>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.object.isRequired,
};
