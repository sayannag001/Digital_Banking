import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
<<<<<<< HEAD
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {

    constructor(private router: Router) { }
    // user:User;
    role: string | null;
    ngOnInit(): void {
        // console.log('NB');
        console.log(localStorage.getItem("role"));
        this.role = localStorage.getItem("role");
    }

    logout(): void {
        localStorage.removeItem('token')
        this.router.navigate(["/auth"]);
    }
=======
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }
  // user:User;
  role:string|null;
  ngOnInit(): void {
    // console.log('NB');
    console.log(localStorage.getItem("role"));
    this.role=localStorage.getItem("role");
  }

  logout(): void {
    localStorage.removeItem('token')
    this.router.navigate(["/auth"]);
  }
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432

}
