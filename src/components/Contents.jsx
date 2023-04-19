import React, { useContext } from "react";
import styles from "./Contents.module.css";
import { Suspense } from "react";
import { DataContext } from "../store/DataContext";
import { Empty, Spin } from "antd";

const Embedded = React.lazy(() => import("./Map.jsx"));
const Temp = React.lazy(() => import("./TempGraph.jsx"));
const Wind = React.lazy(() => import("./WindGraph.jsx"));
const Pressure = React.lazy(() => import("./PressureGraph.jsx"));
const Humidity = React.lazy(() => import("./HumidityGraph.jsx"));
const Oktas = React.lazy(() => import("./OktasGraph.jsx"));
const RainTrace = React.lazy(() => import("./RainTraceGraph.jsx"));
const Visibility = React.lazy(() => import("./VisibilityGraph.jsx"));

export const Contents = () => {
  const { weatherData, loading } = useContext(DataContext);
  return (
    <>
      {loading && <Spin size="large" />}
      {weatherData && (
        <div className={styles.container}>
          <Suspense fallback={<Spin />}>
            <Embedded />
          </Suspense>
          <Suspense fallback={<Spin />}>
            <Temp />
          </Suspense>
          <Suspense fallback={<Spin />}>
            <Wind />
          </Suspense>
          <Suspense fallback={<Spin />}>
            <Pressure />
          </Suspense>
          <Suspense fallback={<Spin />}>
            <Humidity />
          </Suspense>
          <Suspense fallback={<Spin />}>
            <Oktas />
          </Suspense>
          <Suspense fallback={<Spin />}>
            <RainTrace />
          </Suspense>
          <Suspense fallback={<Spin />}>
            <Visibility />
          </Suspense>
        </div>
      )}
      {!loading && !weatherData && <Empty />}
    </>
  );
};
