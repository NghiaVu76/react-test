import { useState } from "react";
import PropTypes from "prop-types";
import { Table as RSuiteTable } from "rsuite";

import styles from "./Table.module.scss";
import classNames from "classnames/bind";
import "rsuite/dist/styles/rsuite-default.css";

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

  const tableData = data.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  return (
    <div>
      <RSuiteTable
        height={500}
        data={tableData}
        onRowClick={(data) => {
          console.log(data);
        }}
        loading={loading}
      >
        <Column width={70} fixed>
          <HeaderCell>ID</HeaderCell>
          <Cell className={cx("special-cell")} dataKey="id" />
        </Column>

        <Column width={350} align="center" fixed>
          <HeaderCell>TÊN SẢN PHẨM</HeaderCell>
          <Cell dataKey="model" />
        </Column>

        <Column width={300}>
          <HeaderCell>NỀN TẢNG</HeaderCell>
          <Cell dataKey="platform" />
        </Column>

        <Column width={150}>
          <HeaderCell>NHÀ SẢN XUẤT</HeaderCell>
          <Cell dataKey="manufacturer" />
        </Column>

        <Column width={120}>
          <HeaderCell>SỐ DỰNG </HeaderCell>
          <Cell dataKey="build_number" />
        </Column>

        <Column width={300}>
          <HeaderCell>SỐ SERI</HeaderCell>
          <Cell dataKey="serial_number" />
        </Column>

        <Column width={100}>
          <HeaderCell>PHIÊN BẢN</HeaderCell>
          <Cell dataKey="version" />
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
          total={data.length}
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
