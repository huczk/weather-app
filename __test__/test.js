import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from '../src/Components/App';
import WeatherCurrent from '../src/Components/Weather-current.jsx';
import WeatherForecast from '../src/Components/Weather-forecast.jsx';
import {data} from './test_helper.js';

describe('App component', () => {
  it('render with title text', () => {
    const app = shallow(<App />);
    expect(app.find('.main-title').text()).to.equal('Check Weather');
  });
});

describe('Current weather component', () => {
  it('render with title text', () => {
    const currentWeather = shallow(<WeatherCurrent data={data.current} />);
    expect(currentWeather.find('.nowWeather-title').text()).to.equal('Current Weather');
  });
});

describe('Forecast weather component', () => {
  it('render with title text', () => {
    const forecastWeather = shallow(<WeatherForecast data={data.forecast} />);
    expect(forecastWeather.find('.forecast-title').text()).to.equal('5 Day forecast');
  });
});
