import React, { useContext } from "react";
import TempGraph from "./TempGraph";
import styles from "./Contents.module.css";
import WindGraph from "./WindGraph";
import PressureGraph from "./PressureGraph";
import HumidityGraph from "./HumidityGraph";
import OktasGraph from "./OktasGraph";
import RainTraceGraph from "./RainTraceGraph";
import VisibilityGraph from "./VisibilityGraph";
import { DataContext } from "../store/DataContext";
import { Empty, Spin } from "antd";
import EmbeddedMap from "./Map";

export const Contents = () => {
  const { weatherData, loading } = useContext(DataContext);
  return (
    <>
      {loading && <Spin size="large" />}
      {weatherData && (
        <div className={styles.container}>
          <EmbeddedMap />
          <TempGraph />
          <WindGraph />
          <PressureGraph />
          <HumidityGraph />
          <OktasGraph />
          <RainTraceGraph />
          <VisibilityGraph />
        </div>
      )}
      {!loading && !weatherData && <Empty />}
    </>
  );
};
