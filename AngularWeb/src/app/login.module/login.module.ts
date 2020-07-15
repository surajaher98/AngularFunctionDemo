import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent, ForgotPasswordComponent, RegistrationComponent } from './components';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, ForgotPasswordComponent, RegistrationComponent]
})
export class LoginModule { }

export { LoginComponent, ForgotPasswordComponent, RegistrationComponent };
