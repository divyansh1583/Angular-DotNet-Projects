import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/patient.model';
import { Gender } from '../models/Gender';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent {
  Gender = Gender; // Expose the Gender enum to the template
  file: File | null = null; // Variable to store file
  submitted = false;
  formData: FormData = new FormData();
  constructor(private patientService: PatientService) { }

  patient: Patient = {
    firstname: '',
    lastname: '',
    gender: Gender.Male,
    phoneNo: '',
    address: '',
    dob: new Date() // initialize date of birth field
  };

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;
    }
  }

  onSubmit(): void {
    this.submitted = true;
    this.formData.append('firstname', this.patient.firstname);
    this.formData.append('lastname', this.patient.lastname);
    this.formData.append('gender', this.patient.gender.toString());
    this.formData.append('phoneNo', this.patient.phoneNo);
    this.formData.append('address', this.patient.address!);
    this.formData.append('dob', this.patient.dob!.toString());
    this.formData.append('file', this.file!, this.file!.name);
    
    this.patientService.addPatient(this.formData).subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('Observable emitted an error: ' + err); },
      complete() { console.log('Task completed'); }
    });
  }
}