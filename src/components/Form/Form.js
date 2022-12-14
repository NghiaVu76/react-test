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
  InputPicker,
  CheckPicker,
} from "rsuite";
import classNames from "classnames/bind";
import { useRef } from "react";
import { InputPickerField } from "../FinalFormComponents";

const cx = classNames.bind(styles);

const adapt /* ⬅️ this is a HOC */ =
  (Component) =>
  ({ input, meta: { valid }, ...rest }) =>
    <Component {...input} {...rest} valid={valid} />;
const AdaptedInput = adapt(Input);
const AdaptedSelect = adapt(CheckPicker);
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
  const sendData = (values) => {
    // console.log("submit");
    onSubmit(values); //gửi values là một object chứa các value của các fields
  };

  const formRef = useRef();

  const onReset = () => {
    formRef.current._reactInternals.child.stateNode.reset();
    formRef.current.state.formValue = null;
  };

  return (
    <>
      <FinalForm
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit, values }) => (
          <>
            <RsuiteForm
              className={cx("form")}
              onSubmit={handleSubmit}
              id="form"
              ref={formRef}
            >
              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <Field
                    name="model"
                    component={AdaptedInput}
                    placeholder=" "
                    validate={required}
                    control
                    // onChange={handleChange(values)}
                  />
                  <ControlLabel>Tên sản phẩm</ControlLabel>
                  <Error name="model" />
                </div>
              </FormGroup>
              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <Field
                    name="platform"
                    component={AdaptedInput}
                    placeholder=" "
                    validate={required}
                    control
                  />
                  <ControlLabel>Nền tảng</ControlLabel>
                  <Error name="platform" />
                </div>
              </FormGroup>
              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <Field
                    className={cx("form-group-field-select")}
                    name="manufacturer"
                    component={AdaptedSelect}
                    inputClassname="input-picker"
                    validate={required}
                    options={data}
                    control
                  />
                  <ControlLabel>Nhà sản xuất</ControlLabel>
                  <Error name="category" />
                </div>
              </FormGroup>
              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <Field
                    className={cx("form-group-field-select")}
                    name="serial_number"
                    component={AdaptedSelect}
                    validate={required}
                    options={data}
                    control
                  />
                  <ControlLabel>Số Seri</ControlLabel>
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
            <Button
              className={cx("filter-button")}
              onClick={sendData(values)}
              appearance="primary"
            >
              Lọc
            </Button>
            <Button
              className={cx("filter-button")}
              onClick={onReset}
              appearance="primary"
            >
              Làm mới
            </Button>
          </>
        )}
      />
    </>
  );
}

Form.propTypes = {
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
