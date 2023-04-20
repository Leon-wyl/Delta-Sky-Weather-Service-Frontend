import React, { useState, useEffect, useContext } from "react";
import { Box } from '@mui/material';
import { Line } from "@ant-design/plots";
import { Space, Typography, Divider } from "antd";
import { getOktasData, getOktasDataNoTime } from "../utils/getFormattedData";
import _ from "lodash";
import styles from "./TempGraph.module.css";
import { DataContext } from "../store/DataContext";

const OktasGraph = () => {
  const { Text } = Typography;

  const { weatherData } = useContext(DataContext);

  const data = getOktasData(weatherData);
  const oktasArray = getOktasDataNoTime(weatherData);

  const config = {
    data,
    width: 300,
    height: 300,
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
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '21vw' }}>
      <Line {...config} className={styles.graph} />
      <div>
        <Space>
          <Text>Max cloud oktas: {_.max(oktasArray)}</Text>
          <Text>Min cloud oktas: {_.min(oktasArray)}</Text>
          <Text>Average cloud oktas: {_.mean(oktasArray).toFixed(1)}</Text>
        </Space>
      </div>
      <Divider />
    </Box >
  );
};

export default OktasGraph;
