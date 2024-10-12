import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const FeeBreakdownChart = ({ transactions }) => {
    const formattedData = transactions.map(transaction => ({
        name: transaction.type, 
        fees: transaction.fees 
    }));
  
    return (
      <BarChart width={600} height={300} data={formattedData}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Legend />
        <Bar dataKey="fees" barSize={20} fill="#389620" /> 
      </BarChart>
    );
  };
  
  export default FeeBreakdownChart;