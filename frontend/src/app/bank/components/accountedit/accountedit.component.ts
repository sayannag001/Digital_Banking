import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../../services/bank.service';
<<<<<<< HEAD
import { Observable, Subscribable, map, of } from 'rxjs';
import { Account } from '../../types/Account';
import { Customer } from '../../types/Customer';
import { ActivatedRoute } from '@angular/router';
 
@Component({
=======
<<<<<<< HEAD
import { Observable, Subscribable, map, of } from 'rxjs';
=======
import { Observable, Subscribable, of } from 'rxjs';
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
import { Account } from '../../types/Account';
import { Customer } from '../../types/Customer';
import { ActivatedRoute } from '@angular/router';

@Component({
<<<<<<< HEAD
    selector: 'app-account',
    templateUrl: './accountedit.component.html',
    styleUrls: ['./accountedit.component.scss']
})
export class EditAccountComponent implements OnInit {
    changedVal() {
    }
    customers$: Observable<Customer[]>;
    accountForm: FormGroup;
    account: Account;
    customer: Customer;
    isFormSubmitted: boolean = false;
    selectedValue: string;

    accountError$: Observable<string>;
    accountSuccess$: Observable<string>;
    ;

    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private banksService: BankService
    ) {
        // this.customers$ = this.banksService.getCustomers();
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            // Get the account data from the route parameter
            this.account = new Account({
                accountId: params.accountId,
                balance: params.balance,
                customer: {
                    customerId: params.customerId,
                    name: params.name,
                    username: params.username,
                    password: params.password,
                    email: params.email,
                    role: params.role
                }
            });
            this.selectedValue = params.customerId;
            console.log('Selected Value:', this.selectedValue);
            this.customers$ = this.banksService.getCustomers().pipe(
                map((customers: Customer[]) => {
                    console.log('All Customers:', customers);
                    return customers.filter(customer => customer.customerId == this.selectedValue);
                })
            );
            this.customers$.subscribe(filteredCustomers => console.log(filteredCustomers));
            this.banksService.getCustomers().subscribe(customers => console.log(customers));

            this.customer = new Customer({
                customerId: params.customerId,
                name: params.name,
                username: params.username,
                password: params.password,
                email: params.email,
                role: params.role
            });
            this.selectedValue = params.customerId;
            this.accountForm = this.formBuilder.group({
                customer: [null, [Validators.required]],
                balance: [this.account?.balance || "", [Validators.required]],
                accountId: [this.account?.accountId || "", [Validators.required]],
            });



            // Initialize the customer based on the retrieved data
            this.customer = this.account.customer;
            console.log(this.selectedValue);
            // Update the form values based on the retrieved data
            // this.accountForm.patchValue({
            //   customer: this.customer,
            //   balance: this.account.balance,
            //   accountId: this.account.accountId
            // });
        });
    }


    onSubmit() {
        this.isFormSubmitted = true;

        if (this.accountForm.invalid) {
            return;
        }

        const formData = this.accountForm.value;
        const editedAccount: Account = new Account({
            accountId: formData.accountId,
            balance: formData.balance,
            customer: formData.customer
        });

        this.banksService.editAccount(editedAccount).subscribe(
            () => {
                // Handle success
                console.log("Account updated successfully");
                this.accountSuccess$ = of("Account updated successfully");
            },
            (error) => {
                // Handle error
                console.error("Unable to update account", error);
            }
        );
    }
}
=======
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
  selector: 'app-account',
  templateUrl: './accountedit.component.html',
  styleUrls: ['./accountedit.component.scss']
})
export class EditAccountComponent implements OnInit {
changedVal() {
}
  customers$: Observable<Customer[]>;
  accountForm: FormGroup;
  account: Account;
  customer: Customer;
  isFormSubmitted: boolean = false;
<<<<<<< HEAD
  selectedValue:string;
 
accountError$:  Observable<string>;
accountSuccess$: Observable<string>;
;
 
=======
  selectedValue:Customer;

accountError$:  Observable<string>;
accountSuccess$: Observable<string>;
;

>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private banksService: BankService
  ) {
<<<<<<< HEAD
    // this.customers$ = this.banksService.getCustomers();
  }
 
  ngOnInit(): void {
=======
    this.customers$ = this.banksService.getCustomers();
  }

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      customer: [this?.customer||"", [Validators.required]],
      balance: [this.account?.balance || "", [Validators.required]],
      accountId: [this.account?.accountId || "", [Validators.required]],
    });

>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    this.route.params.subscribe(params => {
      // Get the account data from the route parameter
      this.account = new Account({
        accountId: params.accountId,
        balance: params.balance,
        customer: {
          customerId: params.customerId,
          name: params.name,
          username: params.username,
          password: params.password,
          email: params.email,
          role: params.role
        }
      });
<<<<<<< HEAD
      this.selectedValue=params.customerId;
      console.log('Selected Value:', this.selectedValue);
      this.customers$ = this.banksService.getCustomers().pipe(
        map((customers: Customer[]) => {
          console.log('All Customers:', customers);
          return customers.filter(customer => customer.customerId == this.selectedValue);
        })
      );
      this.customers$.subscribe(filteredCustomers => console.log(filteredCustomers));
      this.banksService.getCustomers().subscribe(customers => console.log(customers));
 
      this.customer= new Customer({
      customerId: params.customerId,
      name: params.name,
      username: params.username,
      password: params.password,
      email: params.email,
      role: params.role
    });
    this.selectedValue=params.customerId;
    this.accountForm = this.formBuilder.group({
      customer: [null, [Validators.required]],
      balance: [this.account?.balance || "", [Validators.required]],
      accountId: [this.account?.accountId || "", [Validators.required]],
    });
 
    
      
      // Initialize the customer based on the retrieved data
      this.customer = this.account.customer;
      console.log(this.selectedValue);
      // Update the form values based on the retrieved data
      // this.accountForm.patchValue({
      //   customer: this.customer,
      //   balance: this.account.balance,
      //   accountId: this.account.accountId
      // });
    });
  }
  
 
  onSubmit() {
    this.isFormSubmitted = true;
 
    if (this.accountForm.invalid) {
      return;
    }
 
=======

      // Initialize the customer based on the retrieved data
      this.customer = this.account.customer;

      // Update the form values based on the retrieved data
      this.accountForm.patchValue({
        customer: this.customer,
        balance: this.account.balance,
        accountId: this.account.accountId
      });
    });
  }
  

  onSubmit() {
    this.isFormSubmitted = true;

    if (this.accountForm.invalid) {
      return;
    }

>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    const formData = this.accountForm.value;
    const editedAccount: Account = new Account({
      accountId: formData.accountId,
      balance: formData.balance,
      customer: formData.customer
    });
<<<<<<< HEAD
 
=======

>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    this.banksService.editAccount(editedAccount).subscribe(
      () => {
        // Handle success
        console.log("Account updated successfully");
        this.accountSuccess$= of("Account updated successfully");
      },
      (error) => {
        // Handle error
        console.error("Unable to update account", error);
      }
    );
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
