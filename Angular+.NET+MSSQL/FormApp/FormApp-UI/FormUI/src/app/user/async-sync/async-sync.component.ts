import { Component } from '@angular/core';
import { Form } from 'src/app/models/form.model';

import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-async-sync',
  templateUrl: './async-sync.component.html',
  styleUrls: ['./async-sync.component.scss']
})
export class AsyncSyncComponent {
  forms: Form[] = [];
  form1: Form | null = null;
  form2: Form | null = null;
  form3: Form | null = null;
  form4: Form | null = null;
  ids = [
    "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    "3fa85f64-5717-4562-b3fc-2c963f66afa4"
  ];
  constructor(private formService: FormService) {
    // this.formService.getForms().subscribe({
    //   next: (forms) => {
    //     this.forms = forms;
    //   }
    // });
    this.formService.getFormById(this.ids[0]).subscribe({
      next: (value) => {
        this.form1 = value;
      },
    });
    this.formService.getFormById(this.ids[1]).subscribe({
      next: (value) => {
        this.form2 = value;
      }
    });
    this.formService.getFormById(this.ids[2]).subscribe({
      next: (value) => {
        this.form3 = value;
      }
    });
    this.formService.getFormById(this.ids[3]).subscribe({
      next: (value) => {
        this.form4 = value;
      }
    });


  }
}
