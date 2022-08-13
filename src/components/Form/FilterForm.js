import styles from "./Form.module.scss";
import PropTypes from "prop-types";

import { Form as FinalForm, Field } from "react-final-form";
import {
  Form as RsuiteForm,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Button,
  ButtonGroup,
} from "rsuite";
import classNames from "classnames/bind";
import { InputField, InputPickerField } from "../FinalFormComponents";

const cx = classNames.bind(styles);

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

// const required = (value) => (value ? undefined : "Required");

export default function FilterForm(props) {
  const { data, onSubmit, onHide } = props;
  const sendData = (values) => {
    console.log("submit", values);
    onSubmit(values); //gửi values là một object chứa các value của các fields
  };

  const onReset = (form) => {
    form.reset();
  };

  return (
    <>
      <FinalForm
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit, values, form }) => (
          <>
            {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            <RsuiteForm
              className={cx("form")}
              onSubmit={handleSubmit}
              id="form"
            >
              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <ControlLabel>Tên sản phẩm</ControlLabel>
                  <Field
                    className={cx("form-group-field-input")}
                    name="productName"
                    component={InputField}
                    placeholder=" "
                    // onChange=
                    control
                  />
                  <Error name="model" />
                </div>
              </FormGroup>
              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <ControlLabel>Mã sản phẩm</ControlLabel>
                  <Field
                    className={cx("form-group-field-input")}
                    name="productId"
                    component={InputField}
                    placeholder=" "
                    // validate={required}
                    control
                  />
                  <Error name="productId" />
                </div>
              </FormGroup>
              <FormGroup className={cx("form-group")}>
                <div className={cx("form-group-field")}>
                  <ControlLabel>Tên khách hàng</ControlLabel>
                  <Field
                    className={cx("form-group-field-input")}
                    name="customerName"
                    component={InputField}
                    // inputClassname="input-picker"
                    placeholder=" "
                    // validate={required}
                    control
                  />
                  <Error name="customerName" />
                </div>
              </FormGroup>
            </RsuiteForm>
            <ButtonGroup className={cx("button-group")}>
              <Button
                className={cx("button")}
                onClick={sendData(values)}
                appearance="primary"
                color="green"
              >
                Lọc
              </Button>
              <Button
                className={cx("button")}
                onClick={() => onReset(form)}
                appearance="primary"
              >
                Làm mới
              </Button>
              <Button
                className={cx("button")}
                onClick={onHide}
                appearance="primary"
                color="red"
              >
                Hủy
              </Button>
            </ButtonGroup>
          </>
        )}
      />
    </>
  );
}

FilterForm.propTypes = {
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
