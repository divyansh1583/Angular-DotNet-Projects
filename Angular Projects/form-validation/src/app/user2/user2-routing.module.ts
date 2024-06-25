import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path:"",redirectTo:'register',pathMatch:'full'},
  {path:"register",component:RegisterComponent},
  {path:"list",component:ListComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class User2RoutingModule { }
