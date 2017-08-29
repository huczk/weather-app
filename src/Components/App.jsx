import React, { Component } from 'react';
import axios from 'axios';
import WeatherMain from './Weather-main.jsx';
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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        axios.get(`${CURRENT_WEATHER_URL}&lat=${latitude}&lon=${longitude}`)
          .then(res => this.setState({ current: res.data }))
          .catch(err => this.setState({ error: err.message }));
        axios.get(`${FORECAST_URL}&lat=${latitude}&lon=${longitude}`)
          .then(res => this.setState({ forecast: res.data }))
          .catch(err => this.setState({ error: err.message }));
      }, err => this.setState({ error: err.message }));
    } else {
      this.setState({ error: 'Geolocation is not available' });
    }
  }

  render() {
    return (
      <div>
        <h1>🌡</h1>
        <h1 className="main-title">Check Weather</h1>
        {this.state.error
          ? <p className="main-errorMessage">{this.state.error}</p>
          : !this.state.current || !this.state.forecast
            ? <p>Loading...</p>
            : <div>
              <WeatherMain data={this.state.current} />
              <WeatherForecast data={this.state.forecast} />
            </div>
        }
      </div>
    );
  }
}
