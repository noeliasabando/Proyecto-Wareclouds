import axios from "axios";
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3 });

function getData(params) {
  return axios.get("https://api.nasa.gov/planetary/apod", {
    params: {
      api_key: "XwF3BrgfkLce712UT9QEyMEdpBdwHwq1fQ46VydH",
      thumbs: true,
      ...params,
    },
  });
}

const Client = {
  getData,
};

export default Client;
