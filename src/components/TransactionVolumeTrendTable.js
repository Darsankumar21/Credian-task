import React from 'react';
import { Table } from 'antd';

const TransactionVolumeTrendTable = ({ transactions }) => {
  
    const calculateDailyVolume = () => {
      const dailyVolume = {};
  
      transactions.forEach(transaction => {
        const date = transaction.getFormattedDate();
        if (dailyVolume[date]) {
          dailyVolume[date]++;
        } else {
          dailyVolume[date] = 1;
        }
      });
  
      return Object.entries(dailyVolume).map(([date, count]) => ({ date, count }));
    };
  
    const data = calculateDailyVolume();
  
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Transaction Count', dataIndex: 'count', key: 'count' },
    ];
  
    return <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />;
  };
  
  export default TransactionVolumeTrendTable;