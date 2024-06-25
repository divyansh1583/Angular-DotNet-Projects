import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EverythingForm } from '../models/everything-form.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EverythingFormService {


    private apiUrl = 'https://localhost:7262/'; // Assuming your API endpoint is 'api/EverythingForm'

    constructor(private http: HttpClient) { }

    addUser(formData: FormData): Observable<EverythingForm> {
        return this.http.post<EverythingForm>(this.apiUrl + 'api/EverythingForm', formData);
    }
}