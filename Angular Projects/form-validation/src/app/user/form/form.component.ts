  import { Component } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';

  @Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
  })
  export class FormComponent {
        isFormAuth=false;
        loginForm = new FormGroup({
          firstname: new FormControl('', [Validators.required]),
          lastname: new FormControl(''),
          age: new FormControl('', [Validators.required]),
          gender: new FormControl('', [Validators.required]),
          address: new FormControl('', [Validators.required]),
          color: new FormControl(''),
          newsletter: new FormControl(false) // Default value for checkbox
        });

        onSubmit() {
          this.isFormAuth=true;
          console.log('Form submitted!');
          console.log(this.loginForm.value);
        }
  }
