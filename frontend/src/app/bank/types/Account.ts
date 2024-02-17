import { Customer } from "./Customer";
export class Account {
<<<<<<< HEAD
    accountId?: number;
    customer: Customer;
    balance: number;

    constructor(data: any) {
        // if(this.accountId)
        this.accountId = data?.accountId;
        this.customer = data?.customer;
        this.balance = data?.balance !== undefined ? data.balance : 0;
    }
=======
 accountId?: number;
 customer: Customer;
 balance: number;

  constructor(data: any) {
    // if(this.accountId)
    this.accountId = data?.accountId;
    this.customer = data?.customer;
    this.balance = data?.balance !== undefined ? data.balance : 0;
}
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
}