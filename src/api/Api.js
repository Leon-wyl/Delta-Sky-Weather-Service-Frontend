import { postAxios } from "./base";

export const fetchWindEfficiency = async (current_windspeed, max_windspeed) => {
  try {
    // const url =
    //   "https://5qmp4gs3ud.execute-api.ap-southeast-2.amazonaws.com/F12A_PAPA/wind";
    // const data = {
    //   current_windspeed,
    //   max_windspeed,
    // };
    // const headers = {
    //   "Content-Type": "application/json",
    //   Accept: "application/json",
    // };
    // const res = await postAxios(url, data, headers);
    // console.log(res);
    const query = "{ getObject(file: 'F14A_DELTA-1681207633') }"
    const res = await fetch(
      "https://afzpve4n13.execute-api.ap-southeast-2.amazonaws.com/F14A_DELTA/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          'Access-Control-Allow-Origin': "*"
        },
        body: JSON.stringify({
          query: query
        }),
      }
    );
    console.log(res);
    return res;
  } catch (err) {
    return err;
  }
};
