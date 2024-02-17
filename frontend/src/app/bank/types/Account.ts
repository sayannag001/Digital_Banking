import { Customer } from "./Customer";
export class Account {
<<<<<<< HEAD
=======
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
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
 accountId?: number;
 customer: Customer;
 balance: number;

  constructor(data: any) {
    // if(this.accountId)
    this.accountId = data?.accountId;
    this.customer = data?.customer;
    this.balance = data?.balance !== undefined ? data.balance : 0;
}
<<<<<<< HEAD
=======
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
}