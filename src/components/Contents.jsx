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
        <Box sx={{
          display: "flex",
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignContent: 'center',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', width: '70vw', flexWrap: 'wrap' }}>
            <TempGraph />
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '70vw' }}>
              <WindGraph />
              <Suspense fallback={<Spin />}>
                <Humidity />
              </Suspense>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '70vw' }}>
              <Suspense fallback={<Spin />}>
                <Oktas />
              </Suspense>
              <Suspense fallback={<Spin />}>
                <RainTrace />
              </Suspense>
              <Suspense fallback={<Spin />}>
                <Visibility />
              </Suspense>
            </Box>
            {/* <PressureGraph /> */}
            <EmbeddedMap />
          </Box>
          <Box sx={{ width: '20vw' }}>
            <NewsLinks />
          </Box>
        </Box >
      )}
      {!loading && !weatherData && <Empty />}
    </>
  );
};
