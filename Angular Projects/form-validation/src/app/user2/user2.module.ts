import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { User2RoutingModule } from './user2-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputOutputComponent } from './list/input-output/input-output.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    ListComponent,
    RegisterComponent,
    InputOutputComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    User2RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class User2Module { }
