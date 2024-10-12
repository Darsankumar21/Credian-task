import { faker } from '@faker-js/faker';

const generateTransactions = (numTransactions, startDate, endDate) => {
  const transactions = [];
  let currentDate = new Date(startDate);

  for (let i = 0; i < numTransactions; i++) {
    const transactionDate = new Date(
      currentDate.setDate(currentDate.getDate() + Math.floor(Math.random() * 14))
    );
    if (transactionDate > endDate) break;
    currentDate = transactionDate;

    transactions.push({
      id: i + 1,
      userId: Math.floor(Math.random() * 100) + 1,
      date: transactionDate.toISOString().slice(0, 10),
      sender: faker.internet.userName(),
      recipient: faker.company.name(),
      amount: Math.floor(Math.random() * 1000) + 1,
      currency: 'USD',
      fees: Math.floor(Math.random() * 50) + 1,
      status: ['Settled', 'Pending', 'Failed'][Math.floor(Math.random() * 3)],
      type: ['Purchase', 'Withdrawal', 'Transfer'][Math.floor(Math.random() * 3)],
      description: faker.commerce.productDescription(),
      settlementTime: faker.date.between({ // Corrected faker.js usage
        from: transactionDate, 
        to: new Date()      
      }).toISOString(),
    });
  }

  return transactions;
};

const startDate = new Date(2024, 0, 1); 
const endDate = new Date(2024, 8, 31); 
const numTransactions = 100;
const transactionData = generateTransactions(numTransactions, startDate, endDate);

export default transactionData;