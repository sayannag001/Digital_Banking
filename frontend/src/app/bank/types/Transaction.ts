<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef

import { Account } from './Account';

export class Transaction {
<<<<<<< HEAD
=======
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
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
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
<<<<<<< HEAD
=======
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
}