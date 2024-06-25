import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from 'src/app/models/form.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FormService {
  baseApiUrl: string = 'https://localhost:7270';
  constructor( private http:HttpClient) { }
  ids = [
    "3fa85f64-5717-4562-b3fc-2c963f66afa1",
    "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    "3fa85f64-5717-4562-b3fc-2c963f66afa3",
    "3fa85f64-5717-4562-b3fc-2c963f66afa4"
  ];
  getForms():Observable<Form[]>{
    return this.http.get<Form[]>(this.baseApiUrl + '/api/Form');
  }
  
  getFormById(id: string): Observable<Form> {
    return this.http.get<Form>(this.baseApiUrl + '/api/Form/' + id);
  }

  addForm(newForm:Form):Observable<Form>{
    return this.http.post<Form>(this.baseApiUrl + '/api/Form',newForm);
  }

  updateForm(id:string ,updatedForm:Form):Observable<Form>{
    return this.http.put<Form>(this.baseApiUrl + '/api/Form/' + id , updatedForm);
  }

  deleteForm(id:string):Observable<any>{
    return this.http.delete<Form>(this.baseApiUrl + '/api/Form/' + id);
  }
}
