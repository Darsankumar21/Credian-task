import transactionsData from '../data/transactions';

export const filterTransactions = (transactions = transactionsData, filters = {}) => {
  let filteredTransactions = [...transactions]; 

  if (filters.startDate) {
    const startDate = new Date(filters.startDate);
    filteredTransactions = filteredTransactions.filter(
      (transaction) => new Date(transaction.date) >= startDate
    );
  }

  if (filters.endDate) {
    const endDate = new Date(filters.endDate);
    filteredTransactions = filteredTransactions.filter(
      (transaction) => new Date(transaction.date) <= endDate
    );
  }

  if (filters.userId) {
    filteredTransactions = filteredTransactions.filter(
      (transaction) => transaction.userId === parseInt(filters.userId, 10) 
    );
  }

  if (filters.status) {
    filteredTransactions = filteredTransactions.filter(
      (transaction) => transaction.status === filters.status
    );
  }

  // Add more filtering logic as needed... 

  return filteredTransactions;
};