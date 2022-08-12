import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Icon, IconButton, Input } from "rsuite";
import PropTypes from "prop-types";

import classNames from "classnames/bind";
import styles from "./Filter.module.scss";
import FilterForm from "../Form/FilterForm";
import AddOrderModal from "../Modal/AddOrderModal";

const cx = classNames.bind(styles);

export default function OrderFilter(props) {
  const { data, handleFilter, onAddOrder } = props;
  const [isShow, setShow] = useState(false);

  const showFilter = () => {
    setShow(!isShow);
  };

  return (
    <div className={cx("filter")}>
      <div className={cx("filter-header")}>
        <div className={cx("filter-header-searchbox")}>
          <Input type="text" id="search-input" placeholder="Tìm kiếm..." />
          <IconButton
            id="search-button"
            icon={<Icon icon="search" />}
          ></IconButton>
        </div>
        <div className={cx("filter-header-actions")} id="productActions">
          <ButtonGroup className={cx("filter-header-actions-button-group")}>
            <Button
              className={cx("filter-header-actions-add_btn")}
              onClick={onAddOrder}
            >
              Thêm mới
            </Button>
            {isShow ? (
              <Button
                className={cx("filter-header-actions-hide_btn")}
                id="hide_btn"
                onClick={showFilter}
              >
                Ẩn bộ lọc
              </Button>
            ) : (
              <Button
                className={cx("filter-header-actions-show_btn")}
                id="show_btn"
                onClick={showFilter}
              >
                Bộ lọc
              </Button>
            )}
          </ButtonGroup>
        </div>
      </div>
      <div className={cx("filter-form")} id="filter">
        {isShow ? <FilterForm data={data} onSubmit={handleFilter} /> : <></>}
      </div>
    </div>
  );
}

OrderFilter.propTypes = {
  data: PropTypes.object.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
