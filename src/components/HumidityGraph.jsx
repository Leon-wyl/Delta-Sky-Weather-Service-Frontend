import React, { useContext } from "react";
import { Box } from '@mui/material';
import { Line } from "@ant-design/plots";
import { Space, Typography, Divider } from "antd";
import {
  getHumidityData,
  getHumidityDataNoTime,
} from "../utils/getFormattedData";
import _ from "lodash";
import styles from "./TempGraph.module.css";
import { DataContext } from "../store/DataContext";

const HumidityGraph = () => {
  const { Text } = Typography;

  const { weatherData } = useContext(DataContext);

  const data = getHumidityData(weatherData);
  const pressureArray = getHumidityDataNoTime(weatherData);

  const config = {
    data,
    width: 300,
    height: 300,
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
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '26vw' }}>
      <Line {...config} className={styles.graph} />
      <div>
        <Space>
          <Text>Max humidity: {_.max(pressureArray)} %</Text>
          <Text>Min humidity: {_.min(pressureArray)} %</Text>
          <Text>Average humidity: {_.mean(pressureArray).toFixed(1)} %</Text>
        </Space>
      </div>
      <Divider />
    </Box>
  );
};

export default HumidityGraph;
