import { useState } from "react";
import { Table } from "rsuite";
import { fakeData } from "./constants";

import styles from "./TableTest.module.scss";
// import "rsuite/dist/styles/rsuite-default.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const { Column, HeaderCell, Cell, Pagination } = Table;

export default function TableTest() {
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  const handleChangePage = (dataKey) => {
    setPage(dataKey);
  };

  const data = fakeData.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  return (
    <div className={cx("table")}>
      <Table height={420} data={data} loading={loading}>
        <Column width={50} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={100} fixed>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={100}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200}>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>
        <Column width={200} flexGrow={1}>
          <HeaderCell>Company Name</HeaderCell>
          <Cell dataKey="companyName" />
        </Column>
      </Table>

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
        total={fakeData.length}
        onChangePage={handleChangePage}
        onChangeLength={handleChangeLimit}
      />
    </div>
  );
}
