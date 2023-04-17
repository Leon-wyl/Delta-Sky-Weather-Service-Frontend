import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { Space, Typography } from "antd";
import { mockWeatherData } from "../constants/mockWeatherData";
import {
  getWindData,
  getWindSpeedDataNoTime,
  getGustSpeedDataNoTime,
  getLatLon,
} from "../utils/getFormattedData";
import _ from "lodash";
import styles from "./TempGraph.module.css";
import { fetchWindEfficiency } from "../api/Api";

const WindGraph = () => {
  const { Text } = Typography;

  const data = getWindData(mockWeatherData);
  const windSpeedArray = getWindSpeedDataNoTime(mockWeatherData);
  const gustSpeedArray = getGustSpeedDataNoTime(mockWeatherData);

  useEffect(() => {
    const getWindEfficiency = async () => {
      if (windSpeedArray[0] && _.mean(windSpeedArray)) {
        await fetchWindEfficiency(windSpeedArray[0], _.mean(windSpeedArray));
      }
    };

    getWindEfficiency();
  }, []);

  const config = {
    data,
    xField: "time",
    yField: "speed",
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
      {data && <Line {...config} className={styles.graph} />}
      <div>
        <Space>
          <Text>Max wind speed: {_.max(windSpeedArray)} km/h</Text>
          <Text>Min wind speed: {_.min(windSpeedArray)} km/h</Text>
          <Text>
            Average wind speed: {_.mean(windSpeedArray).toFixed(1)} km/h
          </Text>
        </Space>
        <Space>
          <Text>Max gust spped: {_.max(gustSpeedArray)} km/h</Text>
          <Text>Min gust spped: {_.min(gustSpeedArray)} km/h</Text>
          <Text>
            Average gust spped: {_.mean(gustSpeedArray).toFixed(1)} km/h
          </Text>
        </Space>
      </div>
    </div>
  );
};

export default WindGraph;
