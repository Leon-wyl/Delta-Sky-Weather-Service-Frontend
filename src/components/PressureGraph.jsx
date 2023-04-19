import React, { useState, useEffect, useContext } from "react";
import { Line } from "@ant-design/plots";
import { Space, Typography, Divider } from "antd";
import {
  getPressureData,
  getPressureDataNoTime,
} from "../utils/getFormattedData";
import _ from "lodash";
import styles from "./TempGraph.module.css";
import { DataContext } from "../store/DataContext";

const PressureGraph = () => {
  const { Text } = Typography;

  const { weatherData } = useContext(DataContext);

  const data = getPressureData(weatherData);
  const pressureArray = getPressureDataNoTime(weatherData);
  console.log(typeof pressureArray[0])
  const config = {
    data,
    width: 300,
    height: 300,
    xField: "time",
    yField: "pressure",
    yAxis: {
      tickCount: 5,
    },
    seriesField: "name",
    legend: {
      position: "top",
    },
    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
  };

  return (
    <div className={styles.container}>
      <Line {...config} className={styles.graph} />
      <div>
        <Space>
          <Text>Max pressure: {_.max(pressureArray)} kPa</Text>
          <Text>Min pressure: {_.min(pressureArray)} kPa</Text>
          <Text>Average pressure: {_.mean(pressureArray).toFixed(1)} kPa</Text>
        </Space>
      </div>
      <Divider />
    </div>
  );
};

export default PressureGraph;
