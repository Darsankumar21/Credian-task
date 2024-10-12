import React from 'react';
import { Table } from 'antd';

const TransactionSummaryTable = ({ transactions }) => {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { 
        title: 'Date', 
        dataIndex: 'date', 
        key: 'date',
        render: (date) => new Date(date).toLocaleDateString() // Format the date
    },
    { title: 'Sender', dataIndex: 'sender', key: 'sender' },
    { title: 'Recipient', dataIndex: 'recipient', key: 'recipient' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Fees', dataIndex: 'fees', key: 'fees' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { 
        title: 'Settlement Time', 
        dataIndex: 'settlementTime', 
        key: 'settlementTime',
        render: (settlementTime) => new Date(settlementTime).toLocaleString() 
    },
];

  return (
    <Table dataSource={transactions} columns={columns} pagination={{ pageSize: 5 }} />
  );
};

export default TransactionSummaryTable;