import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
constructor(private route:ActivatedRoute){
var id= this.route.snapshot.paramMap.get("id");
console.log("ID is : "+ id);
}
}
