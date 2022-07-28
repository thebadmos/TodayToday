import * as React from "react";
import Switch from "react-switch";

export default function Index({ checked, handleChange }) {
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      onColor="#07D571"
      onHandleColor="#07D571"
      handleDiameter={20}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={12}
      width={35}
      className="react-switch"
      id="material-switch"
    />
  );
}
