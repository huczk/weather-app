import React from 'react';
import moment from 'moment';

const WeatherMain = ({ data }) => {
  // create 3 circles styles with sizes depend on weather data.
  // Later add styles to div's in render method.
  const innerHumidity = {
    background: '#12355B',
    height: `${data.main.humidity * 1.2}px`,
    width: `${data.main.humidity * 1.2}px`,
    borderRadius: '50%',
    margin: '0 auto',
    boxShadow: '0 0 30px rgb(18, 18, 18)',
  };

  const innerClouds = {
    background: '#0E3B43',
    height: `${data.clouds.all * 1.2}px`,
    width: `${data.clouds.all * 1.2}px`,
    borderRadius: '50%',
    margin: '0 auto',
    boxShadow: '0 0 30px rgb(18, 18, 18)',
  };

  const innerWind = {
    // width: 0,
    // height: 0,
    // borderLeft: '30px solid transparent',
    // borderRight: '30px solid transparent',
    // borderBottom: '80px solid #051923',
    color: 'black',
    margin: '0 auto',
    fontSize: '80px',
    transform: `rotate(${data.wind.deg}deg) scaleY(1.4)`,
    textShadow: '0 0 30px rgb(18, 18, 18)',
  };

  return (
    <div className="nowWeather">
      <div className="nowWeather-main">
        <div>
          <img src={`./public/icons/${data.weather[0].icon}.png`} alt="" />
        </div>
        <div className="nowWeather-description">
          <div className="nowWeather-descriptionTitle">
            <h1>{ `${data.name} ${data.main.temp.toFixed()} °C` }</h1>
          </div>
          <p><img className={'nowWeather-sunriseIco'} src="./public/sunrise.png" alt="" />{ ` Sunrise: ${moment(data.sys.sunrise * 1000).format('HH:mm')}` }</p>
          <p><img className={'nowWeather-sunsetIco'} src="./public/sunset.png" alt="" />{ ` Sunset: ${moment(data.sys.sunset * 1000).format('HH:mm')}` }</p>
        </div>
      </div>

      <div className={'nowWeather-circles'}>
        <div>
          <div className={'nowWeather-circlesOuter'}>
            <div style={innerHumidity} />
          </div>
          <p>Humidity<br />{ `${data.main.humidity}%` }</p>
        </div>
        <div>
          <div className={'nowWeather-circlesOuter'}>
            <div style={innerClouds} />
          </div>
          <p>Cloudiness<br />{ `${data.clouds.all}%` }</p>
        </div>
        <div>
          <div className={'nowWeather-circlesOuter'}>
            <div style={innerWind} >▲</div>
          </div>
          <p>Wind Speed<br />{ `${data.wind.speed} m/s` }</p>
        </div>
      </div>

    </div>
  );
};

export default WeatherMain;
