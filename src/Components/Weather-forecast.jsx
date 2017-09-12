import React from 'react';
import {
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ComposedChart,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import moment from 'moment';

moment.locale('pl');

const WeatherForecast = ({ data }) => {
  // Prepare forecast data to render by 'recharts' library
  const forecast = data.list.map((item) => {
    const rain = item.rain ? item.rain['3h'] : 0;
    return {
      name: moment(item.dt_txt).format('D.MM, H:mm'),
      temperature: item.main.temp,
      rain,
    };
  });

  return (
    <div>
      <h2 className="forecast-title">5 Day forecast</h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={forecast}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis dataKey="temperature" type="number" domain={['auto', 'auto']} label="°C" tick={{ stroke: '#ff7300' }} yAxisId={0} />
          <YAxis dataKey="rain" type="number" domain={[0, 'dataMax + 20']} label="mm" orientation="right" tick={{ stroke: '#276CC7' }} yAxisId={1} />
          <Tooltip wrapperStyle={{
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            backgroundColor: '#1F222A',
            boxShadow: '0 0 20px -5px rgb(18, 18, 18)',
          }} />
          <Legend verticalAlign="top" height={36} iconType="circle" />
          <Area type="monotone" dataKey="temperature" fill="#ff7300" stroke="#ff7300" yAxisId={0} />
          <Area type="monotone" dataKey="rain" fill="#3A79CC" stroke="#276CC7" yAxisId={1} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherForecast;
