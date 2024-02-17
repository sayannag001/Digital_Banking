import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
<<<<<<< HEAD
=======
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
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
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
<<<<<<< HEAD
=======
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef

}
