import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { Space, Typography } from "antd";
import { mockWeatherData } from "../constants/mockWeatherData";
import {
  getOktasData,
  getOktasDataNoTime,
} from "../utils/getFormattedData";
import _ from "lodash";
import styles from "./TempGraph.module.css";

const OktasGraph = () => {
  const { Text } = Typography;

  const data = getOktasData(mockWeatherData);
  const oktasArray = getOktasDataNoTime(mockWeatherData);

  const config = {
    data,
    xField: "time",
    yField: "oktas",
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
          <Text>Max cloud oktas: {_.max(oktasArray)}</Text>
          <Text>Min cloud oktas: {_.min(oktasArray)}</Text>
          <Text>
            Average cloud oktas: {_.mean(oktasArray).toFixed(1)}
          </Text>
        </Space>
      </div>
    </div>
  );
};

export default OktasGraph;
