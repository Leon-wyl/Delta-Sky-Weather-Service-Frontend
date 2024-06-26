import React, { useState, useEffect, useContext } from "react";
import { Line } from "@ant-design/plots";
import { Space, Typography, Divider } from "antd";
import {
  getAirTempDataNoTime,
  getApparentTempDataNoTime,
  getTempData,
} from "../utils/getFormattedData";
import _ from "lodash";
import styles from "./TempGraph.module.css";
import { DataContext } from "../store/DataContext";

const TempGraph = () => {
  const { Text } = Typography;

  const { weatherData } = useContext(DataContext);

  const data = getTempData(weatherData);
  const apparentTempArray = getApparentTempDataNoTime(weatherData);
  const airTempArray = getAirTempDataNoTime(weatherData);

  const config = {
    data,
    // width: 300,
    // height: 300,
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
          <Text>Air : {_.mean(airTempArray).toFixed(1)}°C ({_.min(airTempArray)}/{_.max(airTempArray)})</Text>
          {/* <Text>Max Air °C: {_.max(airTempArray)}</Text>
          <Text>Min Air °C: {_.min(airTempArray)}</Text>
          <Text>Avg Air °C: {_.mean(airTempArray).toFixed(1)}</Text> */}
        </Space>
        <Space>
          <Text>Apparent : {_.mean(apparentTempArray).toFixed(1)}°C ({_.min(apparentTempArray)}/{_.max(apparentTempArray)})</Text>
          {/* <Text>Max Apparent °C: {_.max(apparentTempArray)}</Text>
          <Text>Min Apparent °C: {_.min(apparentTempArray)}</Text>
          <Text>
            Avg Apparent °C: {_.mean(apparentTempArray).toFixed(1)}
          </Text> */}
        </Space>
      </div>
      <Divider />
    </div>
  );
};

export default TempGraph;
