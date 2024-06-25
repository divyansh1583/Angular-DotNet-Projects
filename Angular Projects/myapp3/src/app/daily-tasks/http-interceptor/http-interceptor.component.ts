import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.scss']
})
export class HttpInterceptorComponent {
  constructor(private dataService: HttpService) { }

  // ngOnInit(): void {
  //   this.getData();
  // }

  getData(): void {
    this.dataService.getData().subscribe(data => {
      console.log('Data received:', data);
    });
  }
}