import React, {Component} from 'react';
import moment from 'moment';

moment.locale('pl');



const WeatherMain = ({data}) => {
  const innerHumidity = {
    background: '#276CC7',
    height: `${data.main.humidity*1.2}px`,
    width: `${data.main.humidity*1.2}px`,
    borderRadius: '50%',
    margin: '0 auto',
  }

  const innerClouds = {
    background: '#454955',
    height: `${data.clouds.all*1.2}px`,
    width: `${data.clouds.all*1.2}px`,
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
      <h2>Current Weather</h2>
      <div className='desc-ico'>
        <div>
          <img src={`dist/public/icons/${data.weather[0].icon}.png`}/>
        </div>
        <div className='description'>
          <div className='description_title'>
            <h1>{`${data.name} ${data.main.temp.toFixed()} °C`}</h1>
          </div>
          <p><img className={'sun-ico'} src="dist\public\sunrise.png"/>{` Sunrise: ${moment(data.sys.sunrise).format('LT')}`}</p>
          <p><img className={'sun-ico'} src="dist\public\sunset.png"/>{` Sunset: ${moment(data.sys.sunset + 43200000).format('LT')}`}</p>
        </div>
      </div>
      <div className={'circles'}>
        <div>
          <div className={'outer'}>
            <div className={'inner innerHumidity'} style={innerHumidity}></div>
          </div>
          <p>Humidity<br/>{`${data.main.humidity}%`}</p>
        </div>
        <div>
          <div className={'outer'}>
            <div className={'inner inner-clouds'} style={innerClouds}></div>
          </div>
          <p>Cloudiness<br/>{`${data.clouds.all}%`}</p>
        </div>
        <div>
          <div className={'outer'}>
            <div className={'inner inner-wind'} style={innerWind}></div>
          </div>
          <p>Wind Speed<br/>{`${data.wind.speed} m/s`}</p>
        </div>
      </div>
    </div>
  )
};

export default WeatherMain;
