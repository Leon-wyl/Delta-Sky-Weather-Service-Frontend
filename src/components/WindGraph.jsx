import React, { useState, useEffect, useContext } from "react";
import { Line } from "@ant-design/plots";
import { Box } from '@mui/material';
import { Space, Typography, Divider } from "antd";
import {
  getWindData,
  getWindSpeedDataNoTime,
  getGustSpeedDataNoTime,
  getLatLon,
} from "../utils/getFormattedData";
import _ from "lodash";
import styles from "./TempGraph.module.css";
import { fetchWindEfficiency } from "../api/Api";
import { DataContext } from "../store/DataContext";

const WindGraph = () => {
  const { Text } = Typography;

  const [efficiency, setEfficiency] = useState(0);

  const { weatherData } = useContext(DataContext);

  const data = getWindData(weatherData);
  const windSpeedArray = getWindSpeedDataNoTime(weatherData);
  const gustSpeedArray = getGustSpeedDataNoTime(weatherData);

  useEffect(() => {
    const getWindEfficiency = async () => {
      if (windSpeedArray[0] && _.mean(windSpeedArray)) {
        const res = await fetchWindEfficiency(
          windSpeedArray[0],
          _.mean(windSpeedArray)
        );
        console.log(res)
        if (res.data) {
          setEfficiency((res.data.wind_efficiency * 100).toFixed(1));
        }
      }
    };

    getWindEfficiency();
  }, [weatherData]);

  const config = {
    data,
    // width: 300,
    // height: 300,
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
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '45vw' }}>
      {data && <Line {...config} className={styles.graph} />}
      <div>
        <Space>
          <Text>Wind : {_.mean(windSpeedArray).toFixed(1)} km/h ({_.min(windSpeedArray)}/{_.max(windSpeedArray)})</Text>
          {/* <Text>Max wind speed: {_.max(windSpeedArray)} km/h</Text>
          <Text>Min wind speed: {_.min(windSpeedArray)} km/h</Text>
          <Text>
            Average wind speed: {_.mean(windSpeedArray).toFixed(1)} km/h
          </Text> */}
        </Space>
        <Space>
          <Text>Gust : {_.mean(gustSpeedArray).toFixed(1)} km/h ({_.min(gustSpeedArray)}/{_.max(gustSpeedArray)})</Text>
          {/* <Text>Max gust spped: {_.max(gustSpeedArray)} km/h</Text>
          <Text>Min gust spped: {_.min(gustSpeedArray)} km/h</Text>
          <Text>
            Average gust spped: {_.mean(gustSpeedArray).toFixed(1)} km/h
          </Text> */}
        </Space>
        <Text>Efficiency: {`${efficiency} %`}</Text>
      </div>
      <Divider />
    </Box>
  );
};

export default WindGraph;
