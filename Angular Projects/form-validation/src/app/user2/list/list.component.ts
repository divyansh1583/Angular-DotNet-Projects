import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  CData: string = '';
  @Output() ParentEvent = new EventEmitter();
  isHidden = false;
  list: any = [];
  constructor(private route: ActivatedRoute) {

    // let stringList = localStorage.getItem('list');
    // this.list=JSON.parse(stringList!); 
    this.route.queryParams.subscribe(params => {
      this.list.push(params);
      console.log(this.list);
    });

  }
  
  onClick() {
    this.isHidden = !this.isHidden;
  }

  showAlert(event: Event) {
    alert(event);
  }

}

