<<<<<<< HEAD
export class AccountTS{
    accountId?: string;
    customerId: string;
    balance: number;

    constructor(customerId:string, balance: number, accountId?: string){
=======
// import { Customer } from "./Customer";
// export class Account {
 
// }

export class AccountTS {
    accountId?: string;
    customerId: string;
    balance: number;
    constructor( customerId: string, balance: number,accountId?:string,) {
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
        this.accountId = accountId;
        this.customerId = customerId;
        this.balance = balance;
    }

<<<<<<< HEAD
    displayInfo(){
=======
    displayInfo() {
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
        console.log(`Account ID: ${this.accountId}`);
        console.log(`Customer ID: ${this.customerId}`);
        console.log(`Balance: ${this.balance.toFixed(2)}`);
    }
}

const account = new AccountTS("1",1000.00,"1");
account.displayInfo();