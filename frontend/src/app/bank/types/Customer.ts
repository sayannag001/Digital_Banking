export class Customer {
    customerId?: string;
    name: string;
    email: string;
<<<<<<< HEAD
=======
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
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
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
  
  
  
  
  
<<<<<<< HEAD
  
=======
  
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
