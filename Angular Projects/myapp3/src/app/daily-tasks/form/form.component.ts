import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  title="DC";
  isSubmitted=false;
  isSelected=false;
  selectedsports='';
  list=["Male","Female","Other"];
 loginForm=new FormGroup({
  
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl (""),
    age: new FormControl("", [Validators.required, Validators.min(2)]),
    gender: new FormControl("", Validators.required),
    address: new FormControl("", [Validators.required, Validators.minLength(3)]),
    // favoriteSport: new FormControl("", Validators.required)
    
});
  saveForm(){
    localStorage.setItem('login_token','token');
    console.log(this.loginForm.value);
    
  }

  // flashSignal(){
  //   this.isSelected=true;
  //   this.selectedsports=this.loginForm.controls.favoriteSport.value!;

  // }
  
}
