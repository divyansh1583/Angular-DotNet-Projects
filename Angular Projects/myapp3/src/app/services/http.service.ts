import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1');
  }
}
