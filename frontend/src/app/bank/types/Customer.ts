export class Customer {
    customerId?: string;
    name: string;
    email: string;
<<<<<<< HEAD
    password: string;
    username: string;
    role?: string;

    constructor(data: any) {
        this.customerId = data.customerId;
        this.name = data.name;
        this.email = data.email;
        this.username = data.username;
        this.password = data.password;
        this.role = data.role;
    }

    displayInfo() {
        console.log(`Customer ID: ${this.customerId}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Username: ${this.username}`);
        console.log(`Password: ${this.password}`);
        console.log(`Role: ${this.role}`);
        console.log("------");
    }
}

=======
    password:string;
    username:string;
    role?:string;
  
      constructor(data:any) {
          this.customerId = data.customerId;
          this.name = data.name;
          this.email = data.email;
          this.username = data.username;
          this.password = data.password;
          this.role = data.role;
      }
  
      displayInfo() {
          console.log(`Customer ID: ${this.customerId}`);
          console.log(`Name: ${this.name}`);
          console.log(`Email: ${this.email}`);
          console.log(`Username: ${this.username}`);
          console.log(`Password: ${this.password}`);
          console.log(`Role: ${this.role}`);
          console.log("------");
      }
  }
  
  
  
  
  
  
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
