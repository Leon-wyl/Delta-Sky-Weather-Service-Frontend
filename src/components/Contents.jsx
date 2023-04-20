import React, { useContext } from "react";
import TempGraph from "./TempGraph";
import styles from "./Contents.module.css";
import WindGraph from "./WindGraph";
import PressureGraph from "./PressureGraph";
import { Suspense } from "react";
import { DataContext } from "../store/DataContext";
import { Empty, Spin } from "antd";
import EmbeddedMap from "./Map";
import NewsLinks from "./NewsLinks";
import { Box } from '@mui/material'

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
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '60vw' }}>
          <div className={styles.container}>
            <EmbeddedMap />
            <TempGraph />
            <WindGraph />
            <PressureGraph />
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
          <Box style={{ width: '30vw' }}>
            <NewsLinks />
          </Box>
        </Box>
      )}
      {!loading && !weatherData && <Empty />}
    </>
  );
};
