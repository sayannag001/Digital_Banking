// export class CustomerComponent  {}
import { Component, OnInit } from '@angular/core';
import { CustomerTS } from '../../types/tstypes/Customerts'; 
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomersComponent implements OnInit {
  isFormSubmitted: boolean | undefined;
  customerSuccess$: any;
  customerError$: any;
onSubmit() {
  this.isFormSubmitted = true;
    this.customerSuccess$ = of('');
    this.customerError$ = of('');
throw new Error('Method not implemented.');
}
   customerForm!: FormGroup;

   customer: CustomerTS = 
    new CustomerTS("John Doe", "john@example.com", "john_doe", "password123", "User", "1");
    // new Customer(2, "Hardcoded Customer 2", "hardcoded2@example.com", "hardcoded_user2", "password123", null)
  

  constructor( private formBuilder: FormBuilder) {
   

  }

  ngOnInit():void {
    // this.loadCustomers();
    this.customerForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

}