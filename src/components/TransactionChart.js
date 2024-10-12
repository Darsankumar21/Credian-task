import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TransactionChart = ({ transactions }) => {
  const data = transactions.map((transaction) => ({
    name: transaction.getFormattedDate(),
    amount: transaction.amount,
  }));

  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default TransactionChart;