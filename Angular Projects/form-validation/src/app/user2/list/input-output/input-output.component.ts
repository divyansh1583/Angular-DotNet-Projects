import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent  {
  
  @Input() PData:any[]=[];
  @Output() childEvent=new EventEmitter();
  constructor(){}

  onEmit(value:string){
    this.childEvent.emit(value);
  }
}
