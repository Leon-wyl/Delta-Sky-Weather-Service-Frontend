import React, { useState, useEffect, useContext } from "react";
import { Line } from "@ant-design/plots";
import { getRainTraceData } from "../utils/getFormattedData";
import styles from "./TempGraph.module.css";
import { DataContext } from "../store/DataContext";

const RainTraceGraph = () => {
  const { weatherData } = useContext(DataContext)

  const data = getRainTraceData(weatherData);

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
