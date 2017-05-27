import axios from 'axios';

const API_KEY = 'a9d9d40cac4d74524677e35de54f97e5';
export let NOW_URL = `https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&`;
export let FORECAST_URL = `https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric&`;


function getData(url) {
  return axios.get(url)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
};

export default getData;
