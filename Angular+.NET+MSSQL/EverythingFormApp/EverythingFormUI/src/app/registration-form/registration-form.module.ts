import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RegistrationFormRoutingModule } from './registration-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegistrationFormRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RegistrationFormModule { }
