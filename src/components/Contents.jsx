import TempGraph from "./TempGraph";
import styles from './Contents.module.css'
import WindGraph from "./WindGraph";
import PressureGraph from "./PressureGraph";
import HumidityGraph from "./HumidityGraph";
import OktasGraph from "./OktasGraph";
import RainTraceGraph from "./RainTraceGraph";
import VisibilityGraph from "./VisibilityGraph";

export const Contents = () => {
  return <div className={styles.container}>
    <TempGraph />
    <WindGraph />
    <PressureGraph />
    <HumidityGraph />
    <OktasGraph />
    <RainTraceGraph />
    <VisibilityGraph />
  </div>;
};
