import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() PData:string='';
  @Output() childEvent=new EventEmitter();

  onEmit(value:string){
    this.childEvent.emit(value);
  }
}
