import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EverythingForm, GenderType } from 'src/app/models/everything-form.model';
import { EverythingFormService } from 'src/app/services/everything-form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private everythingFormService: EverythingFormService) { }
  formData = new FormData();
  enderType = GenderType; // Expose the GenderType enum to the template
  file: File | null = null; // Variable to store file
  submitted = false;
  registerForm = this.fb.nonNullable.group({
     // Optional as the ID will be assigned by the server
    name: ['', Validators.required],
    age: [0, [Validators.required, Validators.min(18), Validators.max(100)]],
    gender: [GenderType.Male, Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    selectSingle: [0, Validators.required],
    selectMultiple: [[], Validators.required],
    textarea: ['', Validators.required],
    fileInput: [null], // Optional as file input is not always present
    checkbox: [false, Validators.requiredTrue]
  });

  get name() { return this.registerForm.get('name'); }
  get age() { return this.registerForm.get('age'); }
  get gender() { return this.registerForm.get('gender'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get selectSingle() { return this.registerForm.get('selectSingle'); }
  get selectMultiple() { return this.registerForm.get('selectMultiple'); }
  get textarea() { return this.registerForm.get('textarea'); }
  get fileInput() { return this.registerForm.get('fileInput'); }
  get checkbox() { return this.registerForm.get('checkbox'); }

  onSubmit(): void {
    this.submitted = true;
   
    this.formData.append('name', this.registerForm.get('name')?.value!);
    this.formData.append('age', this.registerForm.get('age')?.value.toString()!);
    this.formData.append('gender', this.registerForm.get('gender')?.value.toString()!);
    this.formData.append('email', this.registerForm.get('email')?.value!);
    this.formData.append('password', this.registerForm.get('password')?.value!);
    this.formData.append('selectSingle', this.registerForm.get('selectSingle')?.value.toString()!);
    this.formData.append('selectMultiple', JSON.stringify(this.registerForm.get('selectMultiple')?.value));
    this.formData.append('textarea', this.registerForm.get('textarea')?.value!);
    if (this.file) {
      this.formData.append('file', this.file, this.file.name);
    }
    this.formData.append('checkbox', this.registerForm.get('checkbox')?.value.toString()!);

    this.everythingFormService.addUser(this.formData).subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('Observable emitted an error: ' + err); },
      complete() { console.log('Task completed'); }
    });
  }
}
