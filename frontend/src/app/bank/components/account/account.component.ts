// export class AccountComponent {}
import { Component, OnInit } from '@angular/core';
import { AccountTS } from '../../types/tstypes/Accountts';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountForm!: FormGroup;
  account: AccountTS | undefined;


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
    this.accountForm = this.fb.group({
      account_id: [null, [Validators.required, this.validateAccountId]],
      customer_id: [null, Validators.required],
      balance: [null, [Validators.required, this.validateNonNegativeAmount]],
    });
    this.account = new AccountTS("1",1000.00,"1");

  }
  validateAccountId(control:FormControl) {
    const accountId = control.value;
    return accountId === null ? { accountIdRequired: true } : null;
  }

  validateNonNegativeAmount(control:FormControl) {
    const amount = control.value;
    return amount < 0 ? { nonNegativeAmount: true } : null;
  }

  validateCustomerName(control:FormControl) {
    const customerName = control.value;
    const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharacterPattern.test(customerName) ? { containsSpecialCharacters: true } : null;
  }
}
