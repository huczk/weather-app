import React, { Component } from 'react';
import axios from 'axios';
import WeatherCurrent from './Weather-current.jsx';
import WeatherForecast from './Weather-forecast.jsx';
import { CURRENT_WEATHER_URL, FORECAST_URL } from '../api/apiLinks';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      forecast: '',
      error: '',
    };
  }

  componentWillMount() {
    // Check if user has geolocation module
    if (navigator.geolocation) {
      // Get user position or show error if position is denied by user
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        this.getWeatherData(latitude, longitude);
      }, err => this.setState({ error: err.message }));
    } else {
      this.setState({ error: 'Geolocation is not available' });
    }
  }

  // Get weather data from api service and save in the component state
  getWeatherData(latitude, longitude) {
    axios.get(`${CURRENT_WEATHER_URL}&lat=${latitude}&lon=${longitude}`)
      .then(res => this.setState({ current: res.data }))
      .catch(err => this.setState({ error: err.message }));
    axios.get(`${FORECAST_URL}&lat=${latitude}&lon=${longitude}`)
      .then(res => this.setState({ forecast: res.data }))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    return (
      <div>
        <h1>🌡️</h1>
        <h1 className="main-title">Check Weather</h1>
        {this.state.error
          ? <p className="main-errorMessage">{this.state.error}</p>
          : !this.state.current || !this.state.forecast
            ? <p>Loading...</p>
            : <div>
              <WeatherCurrent data={this.state.current} />
              <WeatherForecast data={this.state.forecast} />
            </div>
        }
      </div>
    );
  }
}
