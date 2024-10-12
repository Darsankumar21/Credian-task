import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SettlementTimelineGraph = ({ transactions }) => {
    const data = transactions.map((transaction) => ({
        name: transaction.getFormattedDate(), 
        settlementTime: parseInt(transaction.getFormattedSettlementTime().split(':')[0], 10) 
    }));
  
    return (
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="settlementTime" stroke="#8884d8" /> 
      </LineChart>
    );
  };
  
  export default SettlementTimelineGraph;