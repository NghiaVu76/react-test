import styles from "./Form.module.scss";
import PropTypes from "prop-types";

import { Form as FinalForm, Field } from "react-final-form";
import {
  Form as RsuiteForm,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Input,
  SelectPicker,
  DatePicker,
  Button,
} from "rsuite";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// const onReset = () => {
//   document.getElementById("form").reset();
// };

const adapt /* ⬅️ this is a HOC */ =
  (Component) =>
  ({ input, meta: { valid }, ...rest }) =>
    <Component {...input} {...rest} valid={valid} />;
const AdaptedInput = adapt(Input);
const AdaptedSelect = adapt(SelectPicker);
const AdaptedDate = adapt(DatePicker);

const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { touched, error } }) =>
      touched && error ? (
        <HelpBlock className={cx("form-group-error-message")}>
          {error}
        </HelpBlock>
      ) : null
    }
  </Field>
);

const required = (value) => (value ? undefined : "Required");

export default function Form({ data, onSubmit }) {
  return (
    <>
      <FinalForm
        onSubmit={onSubmit}
        initialValues={{ stooge: "larry", employed: true }}
        render={({ handleSubmit, values }) => (
          <RsuiteForm className={cx("form")} onSubmit={handleSubmit}>
            <FormGroup className={cx("form-group")}>
              <div className={cx("form-group-field")}>
                <Field
                  name="productName"
                  component={AdaptedInput}
                  placeholder=" "
                  validate={required}
                  control
                />
                <ControlLabel>Tên sản phẩm</ControlLabel>
                <Error name="productName" />
              </div>
            </FormGroup>
            <FormGroup className={cx("form-group")}>
              <div className={cx("form-group-field")}>
                <Field
                  name="quantity"
                  component={AdaptedInput}
                  placeholder=" "
                  validate={required}
                  control
                />
                <ControlLabel>Số lượng</ControlLabel>
                <Error name="quantity" />
              </div>
            </FormGroup>
            <FormGroup className={cx("form-group")}>
              <div className={cx("form-group-field")}>
                <Field
                  className={cx("form-group-field-select")}
                  name="category"
                  component={AdaptedSelect}
                  validate={required}
                  options={data}
                  control
                />
                <ControlLabel>Loại sản phẩm</ControlLabel>
                <Error name="category" />
              </div>
            </FormGroup>
            <FormGroup className={cx("form-group")}>
              <div className={cx("form-group-field")}>
                <Field
                  className={cx("form-group-field-select")}
                  name="status"
                  component={AdaptedSelect}
                  validate={required}
                  options={data}
                  control
                />
                <ControlLabel>Trạng thái</ControlLabel>
                <Error name="status" />
              </div>
            </FormGroup>
            <FormGroup className={cx("form-group")}>
              <div className={cx("form-group-field")}>
                <Field
                  className={cx("form-group-field-select")}
                  name="createDate"
                  component={AdaptedDate}
                  validate={required}
                  control
                />
                <ControlLabel>Ngày tạo</ControlLabel>
                <Error name="createDate" />
              </div>
            </FormGroup>
            <FormGroup className={cx("form-group")}>
              <div className={cx("form-group-field")}>
                <Field
                  name="price"
                  component={AdaptedInput}
                  placeholder=" "
                  validate={required}
                  control
                />
                <ControlLabel>Giá bán</ControlLabel>
                <Error name="price" />
              </div>
            </FormGroup>
          </RsuiteForm>
        )}
      />
      <Button className={cx("filter-button")} onClick={onSubmit}>
        Lọc
      </Button>
    </>
  );
}

Form.propTypes = {
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
