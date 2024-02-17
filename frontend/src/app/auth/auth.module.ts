import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
<<<<<<< HEAD
import { AuthComponent } from "./auth.component";
=======
<<<<<<< HEAD
import { AuthComponent } from "./auth.component";
=======

>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "./components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { LogoutComponent } from './components/logout/logout.component';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { AuthComponent } from "./auth.component";
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef

@NgModule({
  declarations: [AuthComponent, LoginComponent, UserComponent, LogoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    LogoutComponent
  ]
})
export class AuthModule {}
