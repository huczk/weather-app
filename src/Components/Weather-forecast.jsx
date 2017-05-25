import React, {Component} from 'react';
import {Line, XAxis, YAxis, Tooltip, Area, ComposedChart, ResponsiveContainer, Legend} from 'recharts';
import moment from 'moment';

moment.locale('pl');

const WeatherForecast = ({data}) => {
  if(!data) {
    return(<p></p>)
  } else {
    const temp = data.list.map(item => {
      let rain;
      if(!item.rain){
        rain = 0;
      } else {
        rain = item.rain['3h']
      }
      return {name: moment(item.dt_txt).format('D MMMM, H:mm'), temperature: item.main.temp, rain: rain}}
    );

    return(
      <div>
        <h2>5 Day forecast</h2>
        <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={temp}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis dataKey="temperature" type="number" domain={['auto', 'auto']} label="°C" tick={{stroke: '#ff7300'}} yAxisId={0}/>
          <YAxis dataKey="rain" type="number" domain={[0, 'dataMax + 20']} label="mm" orientation='right' tick={{stroke: '#276CC7'}} yAxisId={1}/>
          <Tooltip />
          <Legend verticalAlign="top" height={36} iconType='square'/>
          <Line type="monotone" dataKey="temperature" stroke="#ff7300" yAxisId={0} />
          <Area type="monotone" dataKey="rain" fill="#3A79CC" stroke="#276CC7" yAxisId={1}/>
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    )
  }
};

export default WeatherForecast;
