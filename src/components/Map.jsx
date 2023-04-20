import React, { useContext } from "react";
import { Divider, Typography } from "antd";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_MAP_API_KEY } from "../constants/Key";
import { DataContext } from "../store/DataContext";
import styles from './TempGraph.module.css';

const EmbeddedMap = () => {
  const { Title, Text } = Typography;

  const { weatherData } = useContext(DataContext);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  console.log(typeof weatherData[0].lat)
  if (weatherData[0].lat && weatherData[0].lon) {
    return (
      <div className={styles.mapWrapper}>
        <Title level={4}>{weatherData[0].name}</Title>
        <Text>{`lat: ${weatherData[0].lat}, lon: ${weatherData[0].lon}`}</Text>
        <GoogleMap
          zoom={11.5}
          center={{ lat: weatherData[0].lat, lng: weatherData[0].lon }}
          mapContainerClassName={styles.mapContainer}
        >
          <Marker position={{ lat: weatherData[0].lat, lng: weatherData[0].lon }} />
        </GoogleMap>
        <Divider />
      </div>
    );
  } else {
    return <Text>No Location data</Text>
  }
};

export default EmbeddedMap;
