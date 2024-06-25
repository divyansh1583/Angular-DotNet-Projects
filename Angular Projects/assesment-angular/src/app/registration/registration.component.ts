import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  isAdult=false;
  loginForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(''),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    isAdult:new FormControl(false),
    newsletter: new FormControl(false) // Default value for checkbox
  });

  onSubmit() {
    console.log('Form submitted!');
    console.log(this.loginForm.value);
  }

  // onClicked(value:boolean){
  //   debugger
  //   this.isAdult=value;
  //   console.log("hi");
  // }

}
