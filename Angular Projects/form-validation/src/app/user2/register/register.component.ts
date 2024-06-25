import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    salary: new FormControl('')
  });
  list:any=[];
  constructor(private route:Router){
    if(localStorage.getItem('list')){
      let retrievedList = localStorage.getItem('list');
      this.list = JSON.parse(retrievedList!);
    }
    else
    this.list=[];
  }

  onSumbit() {
    let obj= {
      id: this.list.length,
      name: this.registerForm.value.name,
      salary: this.registerForm.value.salary
    }
    this.list.push(obj); 
    localStorage.setItem('list',JSON.stringify(this.list));
    this.route.navigate(
      ['/user2/list'],
      { queryParams: {
        id: this.list.length,
        name: this.registerForm.value.name,
        salary: this.registerForm.value.salary
        }, 
        
      });
  }
}
