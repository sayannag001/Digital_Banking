<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
// export class Customer {
  
// }
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
export class CustomerTS {
    customerId?: string;
    name: string;
    email: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    password: string;
    username: string;
    role?: string;

    constructor(name: string, email: string, username: string, password: string, role?: string, customerId?: string) {
        this.customerId = customerId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.username = username;
        this.role = role;
    }

    displayInfo(){
        console.log(`Customer ID: ${this.customerId}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Username: ${this.username}`);
        console.log(`Password: ${this.password}`);
        console.log(`Role: ${this.role}`);
        console.log("------");
    }
}

const customer = new CustomerTS("John Doe", "john@example.com", "john_doe", "password123", "User");
customer.displayInfo();
=======
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    password:string;
    username:string;
    role?:string;
  
      constructor(name: string, email: string, username: string, password: string, role: string, customerId?:string) {
          this.customerId = customerId;
          this.name = name;
          this.email = email;
          this.username = username;
          this.password = password;
          this.role = role;
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
  
  
  // Example Usage
  const customer = new CustomerTS( "John Doe", "john@example.com", "john_doe", "password123", "User","1");
  customer.displayInfo();
<<<<<<< HEAD
  
  
  
  
=======




>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
