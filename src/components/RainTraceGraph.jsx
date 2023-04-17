import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { mockWeatherData } from "../constants/mockWeatherData";
import { getRainTraceData } from "../utils/getFormattedData";
import styles from "./TempGraph.module.css";

const RainTraceGraph = () => {
  const data = getRainTraceData(mockWeatherData);

  const config = {
    data: data,
    xField: "time",
    yField: "trace",
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
    </div>
  );
};

export default RainTraceGraph;
