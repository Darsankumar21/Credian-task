import { parseISO, format } from 'date-fns';

export default class Transaction {
  constructor(transaction) {
    if (!transaction) {
      throw new Error("Transaction data is required");
    }

    this.id = transaction.id;

    this.date = parseISO(transaction.date);
    if (isNaN(this.date.getTime())) {
      throw new Error(`Invalid date format: ${transaction.date}`);
    }

    this.sender = transaction.sender;
    this.recipient = transaction.recipient;
    this.amount = parseFloat(transaction.amount); 
    this.currency = transaction.currency || 'USD';
    this.fees = parseFloat(transaction.fees);
    this.status = transaction.status;
    this.type = transaction.type;
    this.description = transaction.description; 

    this.settlementTime = transaction.settlementTime
      ? parseISO(transaction.settlementTime)
      : null;

    if (this.settlementTime && isNaN(this.settlementTime.getTime())) {
      throw new Error(
        `Invalid settlement time format: ${transaction.settlementTime}`
      );
    }
  }

  getFormattedDate() {
    return format(this.date, 'yyyy-MM-dd');
  }

  getFormattedSettlementTime() {
    return this.settlementTime ? format(this.settlementTime, 'HH:mm:ss') : '-'; 
  }

  // Add more helper methods if needed...
}