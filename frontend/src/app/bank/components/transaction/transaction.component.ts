import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, map, of } from "rxjs";
import { AuthService } from "src/app/auth/services/auth.service";
import { BankService } from "../../services/bank.service";
import { Transaction } from "../../types/Transaction";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "../../types/Account";
import { Customer } from "../../types/Customer";

@Component({
  selector: "app-transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.scss"],
})
export class TransactionComponent implements OnInit {
  transactionForm: FormGroup;
  accounts$: Observable<Account[]>;
<<<<<<< HEAD
  date: Date;
  role: string | null;
  userId: string | null;
=======
  date:Date;
  role:string|null;
  userId:string|null;
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
  transactionError$: Observable<string>;
  transactionSuccess$: Observable<string>;
  users$: Observable<Customer[]>;
  isFormSubmitted: boolean = false;
<<<<<<< HEAD

  errorMessages: { [key: string]: string } = {
    NOT_ENOUGH_BALANCE: "Not enough balance to complete transaction",
  };

=======
  
  errorMessages: { [key: string]: string } = {
    NOT_ENOUGH_BALANCE: "Not enough balance to complete transaction",
  };
  
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private bankService: BankService,
    private route: ActivatedRoute,
    private router: Router
<<<<<<< HEAD
  ) { }

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    this.userId = localStorage.getItem("user_id");


    if (this.role == 'USER') {
      // this.accounts$ = this.bankService.getAccounts(strUserId);

      this.accounts$ = this.bankService.getAccountsByUser(this.userId);

    } else {
      this.accounts$ = this.bankService.getAccounts();
      console.log(this.accounts$);

    }
    console.log(this.accounts$);


=======
  ) {}
  
  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    this.userId =localStorage.getItem("user_id");
    
    
    if(this.role=='USER'){
      // this.accounts$ = this.bankService.getAccounts(strUserId);
      
    this.accounts$ = this.bankService.getAccountsByUser(this.userId);
    
    } else{
      this.accounts$ = this.bankService.getAccounts();
      console.log(this.accounts$);
    
    }
      console.log(this.accounts$);
    
    
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
    this.transactionForm = this.formBuilder.group({
      accounts: ["", Validators.required],
      amount: ["", Validators.required],
      transactionType: ["", Validators.required],
<<<<<<< HEAD


=======
      
      
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
    });
  }

  onSubmit() {
    this.isFormSubmitted = true;
    this.transactionError$ = of("");
    this.transactionSuccess$ = of("");
    if (this.transactionForm.invalid) {
      return;
    } else {
      const data = this.transactionForm.value;
      console.log(data);
<<<<<<< HEAD
      data.transactionDate = new Date();
=======
      data.transactionDate= new Date();
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
      const transaction: Transaction = new Transaction(data);
      console.log(transaction);
      this.bankService.performTransaction(transaction).subscribe(
        (res: any) => {
          this.transactionSuccess$ = of("Transaction performed successfully");
        },
        ({ error }) => {
          this.transactionError$ = of(this.errorMessages[error.message]);
        }
      );
    }
  }
}
