import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyMapComponent } from './body-map/body-map.component';

const routes: Routes = [
  {path:'',component:BodyMapComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
