import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'https://localhost:7176'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  addPatient(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl+'/add', formData);
  }
}