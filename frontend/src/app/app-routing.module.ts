<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD
// import {TestingComponent} from "../app/testing/testing.component";
import { AppComponent } from "./app.component";
import { AuthInterceptor } from "./auth.interceptors";
 
 
=======
import { AppComponent } from "./app.component";
import { AuthInterceptor } from "./auth.interceptors";

=======
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432

>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
<<<<<<< HEAD
 
=======

>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
  {
    path: "bank",
    loadChildren: () => import("./bank/bank.module").then((m) => m.BankModule),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/auth",
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
  // {
  //   path:'testing',
  //   component:TestingComponent
  // }
];
<<<<<<< HEAD
 
@NgModule({
  declarations:[AppComponent],
  imports: [RouterModule.forRoot(routes),BrowserModule,HttpClientModule],
=======

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule],
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  exports: [RouterModule],
<<<<<<< HEAD
  bootstrap:[AppComponent]
})
export class AppRoutingModule {}
=======
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
=======
];

@NgModule({
  declarations: [
    AppComponent // Declare AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent] // Bootstrap AppComponent
})
export class AppRoutingModule {}
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
