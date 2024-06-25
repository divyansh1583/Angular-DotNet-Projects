import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'registerform', pathMatch: 'full' },
  {
    path: 'registerform',
    loadChildren: () => import('./registration-form/registration-form.module').then(m => m.RegistrationFormModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
