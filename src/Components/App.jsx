import React, {Component} from 'react';
import WeatherMain from './Weather-main.jsx';
import WeatherForecast from './Weather-forecast.jsx';
import getData, {NOW_URL, FORECAST_URL} from '../api/api.js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {current: '', forecast: '', error: ''}
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude,
          lon = position.coords.longitude;
          getData(`${NOW_URL}&lat=${lat}&lon=${lon}`).then( res => this.setState({current: res}) );
          getData(`${FORECAST_URL}&lat=${lat}&lon=${lon}`).then( res => this.setState({forecast: res}) );
          // getData(`${NOW_URL}&lat=36&lon=27`).then( res => this.setState({current: res}) );
          // getData(`${FORECAST_URL}&lat=36&lon=27`).then( res => this.setState({forecast: res}) );
        },
        (err) => this.setState({error: err.message})
      );
    } else {
      this.setState({error: 'Geolocation is not available' })
    }
  }

  render() {
    return (
      <div>
        {this.state.error ? this.state.error :
          <div>
            <img className='logo' src='./public\2000px-Thermometer_00.svg.png'/>
            <h1 className='main-title'>Check Weather</h1>
            {!this.state.current ? <p>Loading...</p> :
              <div>
                <WeatherMain data={this.state.current}/>
                <WeatherForecast data={this.state.forecast}/>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}
