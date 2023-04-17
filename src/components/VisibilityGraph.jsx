import React, { useState, useEffect, useContext } from "react";
import { Line } from "@ant-design/plots";
import { Space, Typography } from "antd";
import {
  getVisibilityData,
  getVisibilityDataNoTime,
} from "../utils/getFormattedData";
import _ from "lodash";
import styles from "./TempGraph.module.css";
import { DataContext } from "../store/DataContext";

const VisibilityGraph = () => {
  const { Text } = Typography;

  const { weatherData } = useContext(DataContext);

  const data = getVisibilityData(weatherData);
  const visibilityArray = getVisibilityDataNoTime(weatherData);

  const config = {
    data,
    xField: "time",
    yField: "visibility",
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
          <Text>Max visibility: {_.max(visibilityArray)} km</Text>
          <Text>Min visibility: {_.min(visibilityArray)} km</Text>
          <Text>
            Average visibility: {_.mean(visibilityArray).toFixed(1)} km
          </Text>
        </Space>
      </div>
    </div>
  );
};

export default VisibilityGraph;
