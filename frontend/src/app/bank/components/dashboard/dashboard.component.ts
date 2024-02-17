import { Component, OnInit } from '@angular/core';
import { BankService } from '../../services/bank.service';
import { Customer } from '../../types/Customer';
import { Observable } from 'rxjs';
import { Account } from '../../types/Account';
import { Transaction } from '../../types/Transaction';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})   
export class DashboardComponent implements OnInit {
  customers$: Observable<Customer[]>;
  accounts$: Observable<Account[]>
  transactions$: Observable<Transaction[]>
  role :String| null;
  userRole:string;
  userId:number;
  constructor(private bankService: BankService,private router: Router) { }

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
      const strUserId =localStorage.getItem("user_id");
      this.customers$ = this.bankService.getCustomers();
    
    console.log(this.customers$);
    // this.userRole = localStorage.getItem('role');
    if(this.role=='USER'){
      this.accounts$ = this.bankService.getAccountsByUser(strUserId);
      
    this.transactions$ = this.bankService.getTransactionByUser(strUserId);
    
    } else{
      this.accounts$ = this.bankService.getAccounts();
      console.log(this.accounts$);
      this.transactions$ = this.bankService.getAllTranactions();
    
    }
  
  }

  
 

}
