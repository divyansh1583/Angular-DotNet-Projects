import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './list/modal/modal.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AsyncSyncComponent } from './async-sync/async-sync.component';

@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    ModalComponent,
    AsyncSyncComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()]
})
export class UserModule { }
