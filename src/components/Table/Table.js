import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Icon, IconButton, Table as RSuiteTable } from "rsuite";

import styles from "./Table.module.scss";
import classNames from "classnames/bind";
import "rsuite/dist/styles/rsuite-default.css";

const cx = classNames.bind(styles);
const { Column, HeaderCell, Cell, Pagination } = RSuiteTable;

export default function Table(props) {
  const { data, onDelete, onUpdate } = props;

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
    <div className={cx("wrapper")}>
      <RSuiteTable
        data={data || []}
        // onRowClick={(data) => {
        //   console.log(data);
        // }}
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
          <Cell dataKey="orderId">
            {/* {(rowData) => "DH" + (data.indexOf(rowData) + 101)} */}
          </Cell>
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

        <Column width={100} align="center" fixed="right">
          <HeaderCell>CHỨC NĂNG</HeaderCell>
          <Cell>
            {(rowData) => {
              return (
                <span className={cx("actions")}>
                  <IconButton
                    icon={<Icon icon="pencil" />}
                    onClick={() => onUpdate(rowData)}
                  ></IconButton>
                  <IconButton
                    icon={<Icon icon="trash2" />}
                    onClick={() => onDelete(rowData)}
                  ></IconButton>
                </span>
              );
            }}
          </Cell>
        </Column>
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
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
