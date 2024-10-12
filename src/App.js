import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import 'antd/dist/reset.css'; 
import TransactionSummaryTable from './components/TransactionSummaryTable';
import FilterPanel from './components/FilterPanel';
import TransactionChart from './components/TransactionChart';
import FeeBreakdownChart from './components/FeeBreakdownChart';
import SettlementTimelineGraph from './components/SettlementTimelineGraph';
import TransactionVolumeTrendTable from './components/TransactionVolumeTrendTable';
import transactionsData from './data/transactions';
import { filterTransactions } from './utils/filterTransactions';
import Transaction from './models/Transaction';

const { Content } = Layout;

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    setTransactions(
      transactionsData.map((transaction) => {
        try {
          return new Transaction(transaction);
        } catch (error) {
          console.error("Error creating Transaction:", error);
          return null; 
        }
      })
    );
  }, []);

  useEffect(() => {
    const filtered = filterTransactions(transactions, filters);
    setFilteredTransactions(filtered);
  }, [filters, transactions]);

  const handleFilterChange = (newFilter) => {
    setFilters(newFilter);
  };

  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr', 
          gridGap: '20px',
          marginTop: '20px',
        }}>
          <div> 
            <FilterPanel onFilterChange={handleFilterChange} />
            <TransactionSummaryTable transactions={filteredTransactions} />
            <TransactionVolumeTrendTable transactions={filteredTransactions} />
          </div>
          <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gridGap: '20px'}}> 
            <TransactionChart transactions={filteredTransactions} />
            <FeeBreakdownChart transactions={filteredTransactions} />
            <SettlementTimelineGraph transactions={filteredTransactions} />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default App;