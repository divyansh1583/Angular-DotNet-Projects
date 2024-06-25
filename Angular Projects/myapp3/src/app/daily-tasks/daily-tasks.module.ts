import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyTaskRoutingModule } from './daily-tasks-routing.module';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildComponent } from './input-output/child/child.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { PromiseComponent } from './promise/promise.component';
import { TableBindingComponent } from './table-binding/table-binding.component';
import { PatchValueComponent } from './patch-value/patch-value.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { ResultComponent } from './result/result.component';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from '../logging.interceptor';



@NgModule({
  declarations: [
    InputOutputComponent,
    ChildComponent,
    ParentComponent,
    PromiseComponent,
    TableBindingComponent,
    PatchValueComponent,
    ModalComponent,
    ResultComponent,
    HttpInterceptorComponent,

  ],
  imports: [
    CommonModule,
    DailyTaskRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true
    }
  ]
})
export class DailyTasksModule { }
