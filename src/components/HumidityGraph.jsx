import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { Space, Typography } from "antd";
import { mockWeatherData } from "../constants/mockWeatherData";
import {
  getHumidityData,
  getHumidityDataNoTime,
} from "../utils/getFormattedData";
import _ from "lodash";
import styles from "./TempGraph.module.css";

const HumidityGraph = () => {
  const { Text } = Typography;

  const data = getHumidityData(mockWeatherData);
  const pressureArray = getHumidityDataNoTime(mockWeatherData);

  const config = {
    data,
    xField: "time",
    yField: "humidity",
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
          <Text>Max humidity: {_.max(pressureArray)} %</Text>
          <Text>Min humidity: {_.min(pressureArray)} %</Text>
          <Text>
            Average humidity: {_.mean(pressureArray).toFixed(1)} %
          </Text>
        </Space>
      </div>
    </div>
  );
};

export default HumidityGraph;
