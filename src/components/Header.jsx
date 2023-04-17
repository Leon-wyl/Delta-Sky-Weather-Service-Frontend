import React, { useContext } from "react";
import { Typography } from "antd";
import { Cascader } from "antd";
import { weatherStation } from "../constants/weatherStation";
import styles from "./Header.module.css";
import { DataContext } from "../store/DataContext";
import { mockAllData } from "../constants/mockAllData";

const Header = () => {
  const { Title } = Typography;

  const { weatherData, setWeatherData } = useContext(DataContext);

  const filter = (inputValue, path) =>
    path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
    if (!value) {
      setWeatherData(null);
      return;
    }
    const filteredData = value
      ? mockAllData.filter((item) => item.wmo === value[0])
      : null;
    filteredData.length === 0 ? setWeatherData(null) : setWeatherData(filteredData);
  };

  return (
    <div className={styles.container}>
      <Title>Recent Weather Statistics in Australia</Title>
      {!weatherData &&<Title level={5}>Please Select a weather station to view the data: </Title>}
      <Cascader
        options={weatherStation}
        onChange={onChange}
        placeholder="Please select a weather station"
        showSearch={{
          filter,
        }}
        onSearch={(value) => console.log(value)}
      />
    </div>
  );
};

export default Header;
