import { memo } from "react";
import { Input } from "rsuite";
import CustomField from "./CustomField";

function InputCustomField(props) {
  const { inputstyle, inputclassname, value, onChange, ...rest } = props;

  return (
    <CustomField
      {...props}
      style={inputstyle}
      className={`${inputclassname}`}
      accepter={Input}
      block
      {...rest}
      value={value}
    />
  );
}

InputCustomField.propTypes = {};

export default memo(InputCustomField);
