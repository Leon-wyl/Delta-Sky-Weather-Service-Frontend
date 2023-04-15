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
  return data.events.map((item) => item.air_temp);
};

export const getApparentTempDataNoTime = (data) => {
  return data.events.map((item) => item.apparent_temp);
};

export const getTempData = (data) => {
  const formattedApparentTemp = data.events
    .map((item) => ({
      name: "apparent temperature (°C)",
      time: getTime(item.local_date_time),
      temperature: item.apparent_temp,
    }))
    .reverse();
  const formattedAirTemp = data.events.map((item) => ({
    name: "air temperature (°C)",
    time: getTime(item.local_date_time),
    temperature: item.air_temp,
  }));
  return formattedApparentTemp.concat(formattedAirTemp);
};
