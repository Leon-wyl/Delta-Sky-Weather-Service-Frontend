import { postAxios } from "./base.js";

export const fetchWindEfficiency = async (current_windspeed, max_windspeed) => {
  try {
    const url =
      "https://5qmp4gs3ud.execute-api.ap-southeast-2.amazonaws.com/F12A_PAPA/wind";
    const dataWind = {
      current_windspeed,
      max_windspeed,
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const res = await postAxios(url, dataWind, headers);
    console.log(res);
    console.log(await res.json())

    const dataNews = JSON.stringify({
      query: `{
        contentSearch(q:{
          operation: AND,
          subQueries: [
            {term: "weather"},
            {term: "sydney"}
          ]
        }) {
          total
          results {
            webTitle
          }
        }
      }`
    });
    const response = await fetch(
      "/api/H09A_FOXTROT/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: dataNews,
      }
    )
    console.log(response)
    
    const json = await response.json();
    console.log(json)
  } catch (err) {
    return err;
  }
};
