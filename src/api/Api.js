import { postAxios, getAxios } from "./base.js";

export const fetchWindEfficiency = async (current_windspeed, max_windspeed) => {
  try {
    const url = "api2/F12A_PAPA/wind";
    const dataWind = {
      current_windspeed,
      max_windspeed,
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const res = await postAxios(url, dataWind, headers);
    return res;
  } catch (err) {
    return err;
  }
};

export const fetchNews = async (station) => {
  try {
    const url = "/api/H09A_FOXTROT/graphql"
    const dataNews = {
      query: `{
        contentSearch(q:{
          operation: AND,
          subQueries: [
            {term: "` + station + `"},
          ]
        }, orderBy: newest, orderDate: published) {
          total
          results {
            webTitle
            webUrl
          }
        }
      }`,
    };
    const res = await postAxios(url, dataNews);
    console.log(res);
    return res;
  } catch (err) {
    return err;
  }
};

export const fetchWeatherData = async () => {
  try {
    const url = "/api3/";
    const res = await getAxios(url);
    console.log(res)
    return res;
  } catch (err) {
    return err
  }
}
