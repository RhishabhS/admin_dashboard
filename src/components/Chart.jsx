import './Chart.css'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({title,data,dataKey,color}) => {
  return (
    
    <div className="chart">
        <h3 className="chart-title">{title}</h3>
        <ResponsiveContainer width='93%' aspect={4/1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke={color}/>
          
        </LineChart>
        </ResponsiveContainer>
    </div>
    
  )
}

export default Chart