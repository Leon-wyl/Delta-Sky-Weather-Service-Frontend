import axios from 'axios';

export const postAxios = (url, data = {}, headers = {}) =>
  new Promise((resolve, reject) => {
    axios
      .post(
        url,
        { ...data },
        {
          headers: headers,
        }
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
