import React, {Component} from 'react';
import moment from 'moment';

moment.locale('pl');

const WeatherMain = ({data}) => {
  const innerHumidity = {
    background: '#276CC7',
    height: `${data.main.humidity * 1.2}px`,
    width: `${data.main.humidity * 1.2}px`,
    borderRadius: '50%',
    margin: '0 auto',
  }

  const innerClouds = {
    background: '#454955',
    height: `${data.clouds.all * 1.2}px`,
    width: `${data.clouds.all * 1.2}px`,
    borderRadius: '50%',
    margin: '0 auto',
  }

  const innerWind = {
    width: 0,
  	height: 0,
  	borderLeft: '30px solid transparent',
  	borderRight: '30px solid transparent',
  	borderBottom: '80px solid #051923',
    margin: '0 auto',
    transform: `rotate(${data.wind.deg}deg)`
  }

  return(
    <div>
      <h2 className='nowWeather-title'>Current Weather</h2>

      <div className='nowWeather-main'>
        <div>
          <img src={`./public/icons/${data.weather[0].icon}.png`}/>
        </div>
        <div className='nowWeather-description'>
          <div className='nowWeather-descriptionTitle'>
            <h1>{`${data.name} ${data.main.temp.toFixed()} °C`}</h1>
          </div>
          <p><img className={'nowWeather-sunriseIco'} src="./public/sunrise.png"/>{` Sunrise: ${moment(data.sys.sunrise * 1000).format('LT')}`}</p>
          <p><img className={'nowWeather-sunsetIco'} src="./public/sunset.png"/>{` Sunset: ${moment(data.sys.sunset * 1000).format('LT')}`}</p>
        </div>
      </div>

      <div className={'nowWeather-circles'}>
        <div>
          <div className={'nowWeather-circlesOuter'}>
            <div style={innerHumidity}></div>
          </div>
          <p>Humidity<br/>{`${data.main.humidity}%`}</p>
        </div>
        <div>
          <div className={'nowWeather-circlesOuter'}>
            <div style={innerClouds}></div>
          </div>
          <p>Cloudiness<br/>{`${data.clouds.all}%`}</p>
        </div>
        <div>
          <div className={'nowWeather-circlesOuter'}>
            <div style={innerWind}></div>
          </div>
          <p>Wind Speed<br/>{`${data.wind.speed} m/s`}</p>
        </div>
      </div>

    </div>
  )
};

export default WeatherMain;
