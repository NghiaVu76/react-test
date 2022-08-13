import React from "react";

const NumberFormat = require("react-number-format");

export default function FormatNumber(props) {
  const { children } = props;
  return (
    <NumberFormat value={children} thousandSeparator={true} prefix={"$"}>
      {children}
    </NumberFormat>
  );
}
