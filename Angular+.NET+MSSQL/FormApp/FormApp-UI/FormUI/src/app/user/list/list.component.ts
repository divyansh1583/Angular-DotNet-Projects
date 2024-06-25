import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form } from 'src/app/models/form.model';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  forms: Form[] = [];
 
  selectedForm: Form | null = null;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.formService.getForms().subscribe({
      next: (forms) => {
        this.forms = forms;
      }
    });
  }

  //API Fumction to delete
  deleteForm(id: string) {
    this.formService.deleteForm(id).subscribe({
      next: (forms) => {
        console.log(forms);
        console.log('Form Deleted');
      }
    });
  }

  //function to pass to be edited form values to modal
    passForm(form: Form) {
      this.selectedForm = form;
    }


}
