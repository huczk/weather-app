import {API_KEY} from './apiKey.js'

export let CURRENT_WEATHER_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&`;
export let FORECAST_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric&`;
