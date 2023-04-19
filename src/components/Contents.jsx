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
          <Suspense fallback={<div>Loading</div>}>
            <Embedded />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Temp />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Wind />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Pressure />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Humidity />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Oktas />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <RainTrace />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Visibility />
          </Suspense>
        </div>
      )}
      {!loading && !weatherData && <Empty />}
    </>
  );
};
