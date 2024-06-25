import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'user',loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path:'user2',loadChildren: () => import('./user2/user2.module').then(m => m.User2Module)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
