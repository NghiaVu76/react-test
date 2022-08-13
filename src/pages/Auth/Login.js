import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import {
  Form as RSuiteForm,
  Button,
  ButtonToolbar,
  ControlLabel,
  FormGroup,
  Message,
  Panel,
} from "rsuite";
import { InputField } from "../../components/FinalFormComponents";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Login(props) {
  const [error, setError] = useState("");
  // const [active, setActive] = useState(true);

  const onSubmit = async (values) => {
    console.log("onSubmit");
    const { username, password } = values;
    console.log(username, password);

    const data = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then(console.log())
      // .then((res) => {
      //   res.json();
      //   console.log(res);
      // })
      // .then((res) =>
      //   localStorage.setItem(
      //     "token",
      //     JSON.stringify({
      //       token: res.data.token,
      //     })
      //   )
      // )

      .catch(() => {
        setError("Tài khoản hoặc mật khẩu không đúng");
      });
    window.location.reload();
    console.log(data);
    localStorage.setItem(
      "token",
      JSON.stringify({
        token: data.token,
        firstName: data.firstName,
        lastName: data.lastName,
      })
    );
  };

  const onHandleFormSubmit = (form) => {
    form.submit();
  };

  const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      // Key code 13 === ENTER key
      onHandleFormSubmit(this.form);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <Panel bordered>
        <Form onSubmit={onSubmit}>
          {({ handleSubmit, values, form }) => {
            // this.form = form;
            return (
              <RSuiteForm onSubmit={handleSubmit}>
                <FormGroup className="form-group"></FormGroup>
                <FormGroup>
                  <ControlLabel className={cx("label")}>
                    Tên đăng nhập
                  </ControlLabel>
                  <Field
                    name="username"
                    component={InputField}
                    placeholder="Tên đăng nhập"
                    className="form-control"
                    onKeyPress={(e) => {
                      enterPressed(e);
                    }}
                    //validate={composeValidators(Required, EmailValid)}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel className={cx("label")}>Mật khẩu</ControlLabel>
                  <Field
                    name="password"
                    type="password"
                    component={InputField}
                    placeholder="Mật khẩu"
                    className="form-control"
                    onKeyPress={(e) => {
                      enterPressed(e);
                    }}
                    //validate={composeValidators(Required, LengthString)}
                  />
                </FormGroup>
                {error && (
                  <Message
                    className="mb-3"
                    showIcon
                    type="error"
                    description={error}
                  />
                )}
                <FormGroup className="d-flex justify-content-end pb-4 ">
                  <div>
                    <ButtonToolbar>
                      <Button
                        style={{ minWidth: "120px" }}
                        color="blue"
                        appearance="primary"
                        onClick={() => onHandleFormSubmit(form)}
                      >
                        Đăng nhập
                      </Button>
                    </ButtonToolbar>
                  </div>
                </FormGroup>

                <FormGroup className="d-flex justify-content-start pb-4"></FormGroup>
              </RSuiteForm>
            );
          }}
        </Form>
      </Panel>
    </div>
  );
}
