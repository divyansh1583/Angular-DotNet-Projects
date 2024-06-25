import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval } from 'rxjs/internal/observable/interval';
import { Form } from 'src/app/models/form.model';
import { FormService } from 'src/app/services/form.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(private formSerivce: FormService, private router: Router) {

  }
  secondsCounter = interval(1000).subscribe(i => console.log((i + 1) + 'seconds'));
  //new form group
  loginForm = new FormGroup({
    id: new FormControl('3fa85f64-5717-4562-b3fc-2c963f66afa1', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phoneNo: new FormControl('', [Validators.required]),

    classId: new FormControl(0, [Validators.required]),
    dob: new FormControl(new Date(), [Validators.required])
  });

  // //new form type
  newform: Form = {
    id: '',
    name: '',
    address: '',
    phoneNo: '',
    classId: 0,
    dob: new Date()
  }
  onSubmit() {
    console.log('Form submitted!');
    console.log(this.loginForm.value);
    this.newform = {
      id: this.loginForm.value.id!,
      name: this.loginForm.value.name!,
      address: this.loginForm.value.address!,
      phoneNo: this.loginForm.value.phoneNo!,
      classId: this.loginForm.value.classId!,
      dob: this.loginForm.value.dob!
    }
    this.formSerivce.addForm(this.newform).subscribe({
      next: (form) => {
        console.log(form);
        this.router.navigate(['/list']);
      }
    });
    // this.router.navigate(['/user/list']);
  }

}
