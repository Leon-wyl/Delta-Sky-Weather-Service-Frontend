const getTime = (timeString) => {
  return (
    timeString.substring(6, 8) +
    "/" +
    timeString.substring(4, 6) +
    "/" +
    timeString.substring(0, 4) +
    " " +
    timeString.substring(8, 10) +
    ":" +
    timeString.substring(10, 12)
  );
};

export const getAirTempDataNoTime = (data) => {
  return data?.map((item) => item.air_temp);
};

export const getApparentTempDataNoTime = (data) => {
  return data?.map((item) => item.apparent_temp);
};

export const getWindSpeedDataNoTime = (data) => {
  return data?.map((item) => item.wind_speed_kmh);
};

export const getGustSpeedDataNoTime = (data) => {
  return data?.map((item) => item.gust_kmh);
};

export const getPressureDataNoTime = (data) => {
  return data?.map((item) => Number((item.pressure / 10).toFixed(1)));
};

export const getHumidityDataNoTime = (data) => {
  return data?.map((item) => item.rel_humidity);
};

export const getOktasDataNoTime = (data) => {
  return data?.map((item) => item.cloud_oktas);
};

export const getVisibilityDataNoTime = (data) => {
  return data?.map((item) => Number(item.visibility_km) || null);
};

export const getLatLon = (data) => {
  return data ? { lat: data[0].lat, lon: data[0].lon } : null;
};

export const getTempData = (data) => {
  const formattedApparentTemp =
    data?.map((item) => ({
        name: "Apparent temperature (°C)",
        time: getTime(item.local_date_time),
        temperature: item.apparent_temp,
      }))
      .reverse() || [];
  const formattedAirTemp =
    data?.map((item) => ({
        name: "Air temperature (°C)",
        time: getTime(item.local_date_time),
        temperature: item.air_temp,
      }))
      .reverse() || [];
  return formattedApparentTemp?.concat(formattedAirTemp) || [];
};

export const getWindData = (data) => {
  const formattedWindSpeed =
    data?.map((item) => ({
        name: "Wind speed (km/h)",
        time: getTime(item.local_date_time),
        speed: item.wind_speed_kmh,
      }))
      .reverse() || [];
  const formattedGustSpeed =
    data?.map((item) => ({
        name: "Gust speed (km/h)",
        time: getTime(item.local_date_time),
        speed: item.gust_kmh,
      }))
      .reverse() || [];
  const formattedWindDir =
    data?.map((item) => ({
        name: "Wind direction",
        time: getTime(item.local_date_time),
        speed: item.wind_direction,
      }))
      .reverse() || [];
  return (
    formattedWindSpeed?.concat(formattedGustSpeed)?.concat(formattedWindDir) ||
    []
  );
};

export const getPressureData = (data) => {
  return (
    data?.map((item) => ({
        name: "Pressure (kPa)",
        time: getTime(item.local_date_time),
        pressure: (item.pressure / 10).toFixed(1),
      }))
      .reverse() || []
  );
};

export const getHumidityData = (data) => {
  return (
    data?.map((item) => ({
        name: "Relative humidity (%)",
        time: getTime(item.local_date_time),
        humidity: item.rel_humidity,
      }))
      .reverse() || []
  );
};

export const getOktasData = (data) => {
  const formattedOktas =
    data?.map((item) => ({
        name: "Cloud oktas",
        time: getTime(item.local_date_time),
        oktas: item.cloud_oktas,
      }))
      .reverse() || [];
  const formattedCloud =
    data?.map((item) => ({
        name: "Cloud",
        time: getTime(item.local_date_time),
        oktas: item.cloud,
      }))
      .reverse() || [];
  return formattedOktas.concat(formattedCloud) || [];
};

export const getRainTraceData = (data) => {
  return (
    data?.map((item) => ({
        name: "Rain trace after 9am (mm)",
        time: getTime(item.local_date_time),
        trace: Number(item.rain_trace_since_9am) || null,
      }))
      .reverse() || []
  );
};

export const getVisibilityData = (data) => {
  return (
    data?.map((item) => ({
        name: "Visibility (km)",
        time: getTime(item.local_date_time),
        visibility: Number(item.visibility_km) || null,
      }))
      .reverse() || []
  );
};
