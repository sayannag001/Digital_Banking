import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Customer } from '../../types/Customer';
import { BankService } from '../../services/bank.service';
import { ActivatedRoute } from '@angular/router';

@Component({
<<<<<<< HEAD
=======
<<<<<<< HEAD
    selector: 'app-customeredit',
    templateUrl: './customeredit.component.html',
    styleUrls: ['./customeredit.component.scss']
})
export class EditCustomerComponent implements OnInit {

    customerForm: FormGroup;
    customerError$: Observable<string>;
    customerSuccess$: Observable<string>;
    isFormSubmitted: boolean = false;
    customer: Customer;


    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private banksService: BankService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            // Get the customer data from the route parameter
            this.customer = params as Customer;
            console.log(this.customer);
        });
        this.customerForm = this.formBuilder.group({
            name: ["", [Validators.required]],
            email: ["", [Validators.required]],
            customerId: ["", [Validators.required]],
            username: ["", [Validators.required]],
            password: ["", [Validators.required]],
            role: ["", [Validators.required]],

        });
    }

    onSubmit() {
        this.isFormSubmitted = true;
        this.customerSuccess$ = of('');
        this.customerError$ = of('');
        if (this.customerForm.invalid) {
            return;
        } else {
            const { name, email, customerId, username, password, role } = this.customerForm.value;
            const customer: Customer = new Customer({
                name,
                email,
                customerId,
                username,
                password,
                role
            });
            this.banksService.editCustomer(customer).subscribe(
                (res: any) => {
                    this.customerSuccess$ = of('Customer Updated successfully');
                },
                (error) => {
                    this.customerError$ = of("Customer Already Exists !!");
                }
            );
        }
    }
=======
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
  selector: 'app-customeredit',
  templateUrl: './customeredit.component.html',
  styleUrls: ['./customeredit.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customerForm: FormGroup;
  customerError$: Observable<string>;
  customerSuccess$: Observable<string>;
  isFormSubmitted: boolean = false;
  customer: Customer;

  
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private banksService: BankService
  ) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Get the customer data from the route parameter
      this.customer = params as Customer;
      console.log(this.customer);
    });
    this.customerForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      customerId: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      role: ["", [Validators.required]],

    });
  }

  onSubmit() {
    this.isFormSubmitted = true;
    this.customerSuccess$ = of('');
    this.customerError$ = of('');
    if (this.customerForm.invalid) {
      return;
    } else {
      const { name, email,customerId,username,password ,role} = this.customerForm.value;
      const customer: Customer = new Customer({
        name,
        email,
        customerId,
        username,
        password,
        role
      });
      this.banksService.editCustomer(customer).subscribe(
        (res: any) => {
          this.customerSuccess$ = of('Customer Updated successfully');
        },
        (error) => {
          this.customerError$ = of("Customer Already Exists !!");
        }
      );
    }
  }
<<<<<<< HEAD
=======
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef

}
