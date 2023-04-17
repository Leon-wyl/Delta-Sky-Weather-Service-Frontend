import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { Space, Typography } from "antd";
import { mockWeatherData } from "../constants/mockWeatherData";
import {
  getAirTempDataNoTime,
  getApparentTempDataNoTime,
  getTempData,
} from "../utils/getFormattedData";
import _ from "lodash";
import styles from "./TempGraph.module.css";

const TempGraph = () => {
  const { Text } = Typography;

  const data = getTempData(mockWeatherData);
  const apparentTempArray = getApparentTempDataNoTime(mockWeatherData);
  const airTempArray = getAirTempDataNoTime(mockWeatherData);

  const config = {
    data,
    xField: "time",
    yField: "temperature",
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
          <Text>Max Air °C: {_.max(airTempArray)}</Text>
          <Text>Min Air °C: {_.min(airTempArray)}</Text>
          <Text>Average Air °C: {_.mean(airTempArray).toFixed(1)}</Text>
        </Space>
        <Space>
          <Text>Max Apparent °C: {_.max(apparentTempArray)}</Text>
          <Text>Min Apparent °C: {_.min(apparentTempArray)}</Text>
          <Text>
            Average Apparent °C: {_.mean(apparentTempArray).toFixed(1)}
          </Text>
        </Space>
      </div>
    </div>
  );
};

export default TempGraph;
