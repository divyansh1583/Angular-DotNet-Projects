import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent {
  message='';
  promise=new Promise(resolve=>{
    setTimeout(() => {
      this.message='happy birthday';
    }, 2000);
  });
}
