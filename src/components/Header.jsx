import React from "react";
import { Typography } from "antd";
import { Cascader } from "antd";
import { weatherStation } from "../constants/weatherStation";

const Header = () => {
  const { Title } = Typography;

  const filter = (inputValue, path) =>
    path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

  return (
    <div>
      <Title>Weather Yesterday in Australia</Title>
      <Cascader
        options={weatherStation}
        //onChange={onChange}
        placeholder="Please select"
        showSearch={{
          filter,
        }}
        onSearch={(value) => console.log(value)}
      />
    </div>
  );
};

export default Header;
