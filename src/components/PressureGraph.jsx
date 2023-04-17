import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { Space, Typography } from "antd";
import { mockWeatherData } from "../constants/mockWeatherData";
import {
  getPressureData,
  getPressureDataNoTime,
} from "../utils/getFormattedData";
import _ from "lodash";
import styles from "./TempGraph.module.css";

const PressureGraph = () => {
  const { Text } = Typography;

  const data = getPressureData(mockWeatherData);
  const pressureArray = getPressureDataNoTime(mockWeatherData);

  const config = {
    data,
    xField: "time",
    yField: "pressure",
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
          <Text>
            Average pressure: {_.mean(pressureArray).toFixed(1)} kPa
          </Text>
        </Space>
      </div>
    </div>
  );
};

export default PressureGraph;
