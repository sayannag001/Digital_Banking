import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../../services/bank.service';
import { Observable, Subscribable, of } from 'rxjs';
import { Account } from '../../types/Account';
import { Customer } from '../../types/Customer';
import { ActivatedRoute } from '@angular/router';

@Component({
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
  selectedValue:Customer;

accountError$:  Observable<string>;
accountSuccess$: Observable<string>;
;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private banksService: BankService
  ) {
    this.customers$ = this.banksService.getCustomers();
  }

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      customer: [this?.customer||"", [Validators.required]],
      balance: [this.account?.balance || "", [Validators.required]],
      accountId: [this.account?.accountId || "", [Validators.required]],
    });

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
        this.accountSuccess$= of("Account updated successfully");
      },
      (error) => {
        // Handle error
        console.error("Unable to update account", error);
      }
    );
  }
}
