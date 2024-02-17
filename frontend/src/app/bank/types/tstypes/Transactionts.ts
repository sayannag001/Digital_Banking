<<<<<<< HEAD
export class TransactionTS{
    transactionId?:number;
    accountId: string;
    amount: number;
    transactionDate: Date;
    transactionType: string;

    constructor(accountId: string, amount: number, transactionDate: Date, transactionId?:number){
        this.transactionId = transactionId;
        this.accountId=accountId;
=======

// import { Account } from './Account';

// export class Transaction {
  
// }
export class TransactionTS {
    transactionId?: number;
    accountId: string;
  amount: number;
  transactionDate: Date;
   transactionType:string;

    constructor(accountId: string, amount: number, transactionDate: Date, transactionId?:number) {
        this.transactionId = transactionId;
        this.accountId = accountId;
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
        this.amount = amount;
        this.transactionDate = transactionDate;
    }

<<<<<<< HEAD
    displayInfo(){
=======
    displayInfo() {
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
        console.log(`Transaction ID: ${this.transactionId}`);
        console.log(`Account ID: ${this.accountId}`);
        console.log(`Amount: ${this.amount.toFixed(2)}`);
        console.log(`Transaction Date: ${this.transactionDate}`);
        console.log("------");
    }
}

<<<<<<< HEAD
const transaction = new TransactionTS("1",50.00,new Date(),1);
=======
const transaction = new TransactionTS("1", 50.00, new Date(),1);
transaction.displayInfo();
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
