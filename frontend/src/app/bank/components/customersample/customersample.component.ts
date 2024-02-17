import { Component } from '@angular/core';
// import { Account } from '../bank/types/Account';
import { CustomerTS } from '../../types/tstypes/Customerts';

@Component({
  selector: 'app-customersample',
  standalone: true,
  imports: [],
  templateUrl: './customersample.component.html',
  styleUrls: ['./customersample.component.css']
})
export class CustomersampleComponent {
  // account:Cu = new Account("1",400,"1");
  // name: string, email: string, username: string, password: string, role: string, customerId?:string)
<<<<<<< HEAD
  customer: CustomerTS = new CustomerTS("jhon", "jhon@gmail.com", "jhonuser", "User", "1");
}
=======
   customer:CustomerTS = new CustomerTS("jhon","jhon@gmail.com","jhonuser","User","1");
}
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
