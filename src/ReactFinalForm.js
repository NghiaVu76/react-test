import React from "react";
import { Form, Field } from "react-final-form";
import {
  Row,
  Col,
  Form as RSuiteForm,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Button,
  Input,
  SelectPicker,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
} from "rsuite";
import classNames from "classnames/bind";
import styles from "./ReactFinalForm.module.scss";

// import "rsuite/dist/styles/rsuite-default.css";
import { data } from "./constants";

const cx = classNames.bind(styles);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const onReset = () => {
  document.getElementById("form").reset();
};

const adapt /* ⬅️ this is a HOC */ =
  (Component) =>
  ({ input, meta: { valid }, ...rest }) =>
    <Component {...input} {...rest} valid={valid} />;
const AdaptedInput = adapt(Input);
const AdaptedCheckbox = adapt(Checkbox);
const AdaptedRadio = adapt(Radio);
const AdaptedSelect = adapt(SelectPicker);
const AdaptedTextarea = adapt(FormControl);

const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { touched, error } }) =>
      touched && error ? <HelpBlock>{error}</HelpBlock> : null
    }
  </Field>
);

const required = (value) => (value ? undefined : "Required");

export default function ReactFinalForm() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Row className={cx("row")}>
        <Col />
        <Col lg={24}>
          <Form
            onSubmit={onSubmit}
            initialValues={{ stooge: "larry", employed: true }}
            render={({ handleSubmit, values }) => (
              <RSuiteForm onSubmit={handleSubmit} id="form">
                <FormGroup>
                  <ControlLabel>First Name</ControlLabel>
                  <Field
                    name="firstName"
                    component={AdaptedInput}
                    placeholder="First Name"
                    validate={required}
                    control
                  />
                  <Error name="firstName" />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Last Name</ControlLabel>
                  <Field
                    name="lastName"
                    component={AdaptedInput}
                    placeholder="Last Name"
                    validate={required}
                    control
                  />
                  <Error name="lastName" />
                </FormGroup>
                <CheckboxGroup className={cx("sauces-checkbox-field")}>
                  <Field
                    name="employed"
                    component={AdaptedCheckbox}
                    type="checkbox"
                    id="employed"
                    value="employed"
                  />
                  <ControlLabel htmlFor="employed">Employed</ControlLabel>
                </CheckboxGroup>

                <FormGroup>
                  <ControlLabel>Favorite Color</ControlLabel>
                  <Field
                    name="favoriteColor"
                    component={AdaptedSelect}
                    validate={required}
                    options={data}
                    control
                  />
                  <Error name="favoriteColor" />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Toppings</ControlLabel>
                  <Field
                    name="toppings"
                    component={AdaptedSelect}
                    validate={required}
                    multiple
                    arrow={false}
                    options={[
                      { value: "chicken", label: "🐓 Chicken" },
                      { value: "ham", label: "🐷 Ham" },
                      { value: "mushrooms", label: "🍄 Mushrooms" },
                      { value: "cheese", label: "🧀 Cheese" },
                      { value: "tuna", label: "🐟 Tuna" },
                      { value: "pineapple", label: "🍍 Pineapple" },
                    ]}
                    control
                  />
                  <Error name="toppings" />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Sauces</ControlLabel>
                  <CheckboxGroup>
                    <div className={cx("sauces-checkbox-field")}>
                      <Field
                        name="sauces"
                        component={AdaptedCheckbox}
                        id="ketchup"
                        type="checkbox"
                        value="ketchup"
                      />
                      <ControlLabel htmlFor="ketchup">Ketchup</ControlLabel>
                    </div>
                    <div className={cx("sauces-checkbox-field")}>
                      <Field
                        name="sauces"
                        component={AdaptedCheckbox}
                        id="mayonnaise"
                        type="checkbox"
                        value="mayonnaise"
                      />
                      <ControlLabel htmlFor="mayonnaise">
                        Mayonnaise
                      </ControlLabel>
                    </div>
                    <div className={cx("sauces-checkbox-field")}>
                      <Field
                        name="sauces"
                        component={AdaptedCheckbox}
                        id="guacamole"
                        type="checkbox"
                        value="guacamole"
                      />
                      <ControlLabel htmlFor="guacamole">
                        Guacamole 🥑
                      </ControlLabel>
                    </div>
                  </CheckboxGroup>
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Best Stooge</ControlLabel>
                  <RadioGroup>
                    <Field
                      name="stooge"
                      component={AdaptedRadio}
                      type="radio"
                      id="larry"
                      value="larry"
                    />
                    <ControlLabel htmlFor="larry">Larry</ControlLabel>
                    <Field
                      name="stooge"
                      component={AdaptedRadio}
                      type="radio"
                      id="moe"
                      value="moe"
                    />
                    <ControlLabel htmlFor="moe">Moe</ControlLabel>
                    <Field
                      name="stooge"
                      component={AdaptedRadio}
                      type="radio"
                      id="curly"
                      value="curly"
                    />
                    <ControlLabel htmlFor="curly">Curly</ControlLabel>
                  </RadioGroup>
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Notes</ControlLabel>
                  <Field
                    name="notes"
                    component={AdaptedTextarea}
                    placeholder="Notes"
                    validate={required}
                    control
                  />
                  <Error name="notes" />
                </FormGroup>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Button type="submit" appearance="primary">
                    Submit
                  </Button>
                  <Button type="button" onClick={onReset} appearance="primary">
                    Reset
                  </Button>
                </div>

                <pre
                  style={{
                    border: "1px solid #ccc",
                    background: "rgba(0, 0, 0, 0.1)",
                    boxShadow: "inset 1px 1px 3px rgba(0, 0, 0, 0.2)",
                    padding: "20px",
                  }}
                >
                  {JSON.stringify(values, 0, 2)}
                </pre>
              </RSuiteForm>
            )}
          />
        </Col>
        <Col />
      </Row>
    </div>
  );
}
