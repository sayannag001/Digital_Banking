import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../../services/bank.service';
import { Observable, of } from 'rxjs';
import { Account } from '../../types/Account';
import { Customer } from '../../types/Customer';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  customers$: Observable<Customer[]>;
  accountForm: FormGroup;
  accounts$: Observable<Account[]>;
  accountError$: Observable<string>;
  accountSuccess$: Observable<string>;
  isFormSubmitted: boolean = false;
  bankService: BankService;
<<<<<<< HEAD
  role: string | null;
  userId: string | null;
=======
  role:string|null;
  userId:string|null;
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
  constructor(
    private formBuilder: FormBuilder,
    private banksService: BankService
  ) {
<<<<<<< HEAD

    this.customers$ = this.banksService.getCustomers();

=======
  
    this.customers$ = this.banksService.getCustomers();
    
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
  }

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      customer: ["", [Validators.required]],
      balance: ["", [Validators.required]],
    });
<<<<<<< HEAD

=======
    
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
  }

  onSubmit() {
    this.isFormSubmitted = true;
    this.accountSuccess$ = of('');
    this.accountError$ = of('');
    if (this.accountForm.invalid) {
      return;
    } else {
<<<<<<< HEAD
      const formData = this.accountForm.value;
=======
      const formData= this.accountForm.value;
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
      console.log(formData);
      const account = new Account(formData);
      this.banksService.addAccount(account).subscribe(
        (res: any) => {
          this.accountSuccess$ = of("Account created successfully");
        },
        (error) => {
          this.accountError$ = of("Unable to create account");
        }
      );
    }
  }

}
