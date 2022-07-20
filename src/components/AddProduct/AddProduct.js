import Header from "../Header/Header";
import styles from "./AddProduct.module.scss";

import { Form, Field } from "react-final-form";
import {
  Form as RsuiteForm,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Input,
  SelectPicker,
  DatePicker,
} from "rsuite";
import classNames from "classnames/bind";
// import SelectInput from "../Features/SelectInput/SelectInput";

const cx = classNames.bind(styles);

const data = [
  {
    label: "Eugenia",
    value: "Eugenia",
    role: "Master",
  },
  {
    label: "Kariane",
    value: "Kariane",
    role: "Master",
  },
  {
    label: "Louisa",
    value: "Louisa",
    role: "Master",
  },
  {
    label: "Marty",
    value: "Marty",
    role: "Master",
  },
  {
    label: "Kenya",
    value: "Kenya",
    role: "Master",
  },
  {
    label: "Hal",
    value: "Hal",
    role: "Developer",
  },
  {
    label: "Julius",
    value: "Julius",
    role: "Developer",
  },
  {
    label: "Travon",
    value: "Travon",
    role: "Developer",
  },
  {
    label: "Vincenza",
    value: "Vincenza",
    role: "Developer",
  },
  {
    label: "Dominic",
    value: "Dominic",
    role: "Developer",
  },
  {
    label: "Pearlie",
    value: "Pearlie",
    role: "Guest",
  },
  {
    label: "Tyrel",
    value: "Tyrel",
    role: "Guest",
  },
  {
    label: "Jaylen",
    value: "Jaylen",
    role: "Guest",
  },
  {
    label: "Rogelio",
    value: "Rogelio",
    role: "Guest",
  },
];

export default function AddProduct() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Header>Thêm mới sản phẩm</Header>
        <div className={cx("content")}>
          <RsuiteForm className={cx("form")}>
            <FormGroup className={cx("form-group")}>
              <div className={cx("form-group-field")}>
                <Input placeholder=" " />
                <ControlLabel>Tên sản phẩm</ControlLabel>
              </div>
              <HelpBlock className={cx("form-group-error-message")}>
                Required
              </HelpBlock>
            </FormGroup>
            <FormGroup className={cx("form-group")}>
              <div className={cx("form-group-field")}>
                <Input placeholder=" " type="number" />
                <ControlLabel>Số lượng</ControlLabel>
              </div>
              <HelpBlock className={cx("form-group-error-message")}>
                Required
              </HelpBlock>
            </FormGroup>
            <FormGroup className={cx("form-group")}>
              <div className={cx("form-group-field")}>
                <SelectPicker
                  className={cx("form-group-field-select")}
                  appearance="default"
                  placeholder=" "
                  data={data}
                />
                <ControlLabel>Loại sản phẩm</ControlLabel>
              </div>
            </FormGroup>
            <FormGroup className={cx("form-group")}>
              <div className={cx("form-group-field")}>
                <SelectPicker
                  className={cx("form-group-field-select")}
                  appearance="default"
                  searchable={false}
                  placeholder=" "
                  data={data}
                />
                <ControlLabel>Trạng thái</ControlLabel>
              </div>
            </FormGroup>
            <FormGroup className={cx("form-group")}>
              <div className={cx("form-group-field")}>
                <Input placeholder=" " type="date" />
                <ControlLabel>Ngày tạo</ControlLabel>
              </div>
            </FormGroup>
            <FormGroup className={cx("form-group")}>
              <div className={cx("form-group-field")}>
                <Input placeholder=" " />
                <ControlLabel>Giá bán</ControlLabel>
              </div>
            </FormGroup>
          </RsuiteForm>
        </div>
      </div>
    </div>
  );
}
