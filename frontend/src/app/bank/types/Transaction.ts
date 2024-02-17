<<<<<<< HEAD

import { Account } from './Account';

export class Transaction {
    amount: number;
    transactionDate?: Date;
    transactionType: string;
    accounts?: Account;
    constructor(data: any) {
        this.amount = data.amount;
        this.transactionType = data.transactionType;
        this.transactionDate = data.transactionDate;
        this.accounts = data.accounts;
    }
=======
import { Account } from './Account';

export class Transaction {
  amount: number;
  transactionDate?:Date;
  transactionType:string;
  accounts?:Account;
  constructor(data: any) {
    this.amount = data.amount;
    this.transactionType=data.transactionType;
    this.transactionDate=data.transactionDate;
    this.accounts = data.accounts;
  }
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
}