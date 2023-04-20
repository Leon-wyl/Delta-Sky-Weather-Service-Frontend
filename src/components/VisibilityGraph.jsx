import React, { useState, useEffect, useContext } from "react";
import { Box } from '@mui/material';
import { Line } from "@ant-design/plots";
import { Space, Typography, Divider } from "antd";
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
    width: 300,
    height: 300,
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
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '23vw' }}>
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
      <Divider />
    </Box>
  );
};

export default VisibilityGraph;
