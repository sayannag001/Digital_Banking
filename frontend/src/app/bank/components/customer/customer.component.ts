import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Customer } from '../../types/Customer';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;
  customerError$: Observable<string>;
  customerSuccess$: Observable<string>;
  isFormSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private banksService: BankService
<<<<<<< HEAD
  ) { }
=======
  ) {}
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
<<<<<<< HEAD
      role: ["", [Validators.required]]
    });
  }
  hasSpecialCharacters(inputString: string): boolean {
    // Define a regular expression for special characters
    const specialCharactersRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

=======
    });
  }
  hasSpecialCharacters(inputString:string):boolean {
    // Define a regular expression for special characters
    const specialCharactersRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
    // Test if the inputString contains any special characters
    return specialCharactersRegex.test(inputString);
  }
  onSubmit() {
    this.isFormSubmitted = true;
    this.customerSuccess$ = of('');
    this.customerError$ = of('');
    const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (this.customerForm.invalid) {
      return;
    } else {
<<<<<<< HEAD

      const data = this.customerForm.value;
      if (data.password.length < 8) {
        this.customerError$ = of("Password must be of 8 characters");
        return;
      }
      if (this.hasSpecialCharacters(data.username)) {
=======
      
      const data= this.customerForm.value;
      if(data.password.length < 8)
      {
        this.customerError$ = of("Password must be of 8 characters");
        return;
      }
      if(this.hasSpecialCharacters(data.username))
      {
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
        this.customerError$ = of("User Name must consist of letter and number only!!");
        return;
      }
      console.log(emailRegex.test(data.email));
<<<<<<< HEAD
      if (!emailRegex.test(data.email)) {
=======
      if(!emailRegex.test(data.email))
      {
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
        this.customerError$ = of("Invalid Email Id!!");
        return;

      }
      // const username = name, password = "abcd1234";
<<<<<<< HEAD
      const customer: Customer =
        new Customer(data);

=======
      const customer: Customer = 
       new Customer(data);
      
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
      ;
      this.banksService.addCustomer(customer).subscribe(
        (res: any) => {
          this.customerSuccess$ = of('Customer created successfully');
        },
        (error) => {
          this.customerError$ = of("Unable to create customer");
        }
      );
    }
  }

}
