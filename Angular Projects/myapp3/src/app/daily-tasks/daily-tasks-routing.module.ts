import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { PromiseComponent } from './promise/promise.component';
import { TableBindingComponent } from './table-binding/table-binding.component';
import { PatchValueComponent } from './patch-value/patch-value.component';
import { ModalComponent } from './modal/modal.component';
import { formauthGuard } from '../guards/formauth.guard';
import { ResultComponent } from './result/result.component';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';





const routes: Routes = [
  {path:'',redirectTo:'form',pathMatch:'full'},
  {path:'form',component:FormComponent},
  {path:'inputoutput',component:InputOutputComponent},
  {path:'promise',component:PromiseComponent},
  {path:'tablebinding',component:TableBindingComponent},
  {path:'patchvalue',component:PatchValueComponent},
  {path:'modal',component:ModalComponent},
  {path:'result',component:ResultComponent,canActivate:[formauthGuard]},
  {path:'httpinterceptor',component:HttpInterceptorComponent},
  // {path:'result',component:ResultComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyTaskRoutingModule { }
