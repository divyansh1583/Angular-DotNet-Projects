import { Component } from '@angular/core';
import { BodyPart } from 'src/app/models/BodyPart';

@Component({
  selector: 'app-body-map',
  templateUrl: './body-map.component.html',
  styleUrls: ['./body-map.component.scss']
})
export class BodyMapComponent {
  bodyPartsList:BodyPart[]=[];
  constructor() { }

  onBodyPartClick(bodyPart: string): void {
    if(this.bodyPartsList.find(x=>x.name==bodyPart)){
      this.bodyPartsList = this.bodyPartsList.filter(x=>x.name!=bodyPart);
      
    }
    else{
      this.bodyPartsList.push({name:bodyPart,selected:false});
    }
  }

  submitBodyPartMapping(mapping: any): void {
    
  }
}
