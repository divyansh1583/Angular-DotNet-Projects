import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Form } from 'src/app/models/form.model';
import { FormService } from 'src/app/services/form.service';
import { ListComponent } from '../list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnChanges {

  @Input() PData: Form | null = null;

  upDatedform: Form = {
    id: '',
    name: '',
    address: '',
    phoneNo: '',
    classId: 0,
    dob: new Date()
  }

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phoneNo: new FormControl('', [Validators.required]),
    classId: new FormControl(1, [Validators.required]),
    dob: new FormControl(new Date(), [Validators.required])
  });
  
  constructor(private formService: FormService, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    
    this.loginForm.controls['name'].setValue(this.PData?.name || ''); 
    this.loginForm.controls['address'].setValue(this.PData?.address || '');
    this.loginForm.controls['phoneNo'].setValue(this.PData?.phoneNo || '');
    this.loginForm.controls['classId'].setValue(this.PData?.classId || 0);
    this.loginForm.controls['dob'].setValue(this.PData?.dob || new Date());


  }

  onSubmit() {
      this.upDatedform.id=this.PData?.id!;
      this.upDatedform.name= this.loginForm.value.name!,
      this.upDatedform.address=this.loginForm.value.address!,
      this.upDatedform.phoneNo= this.loginForm.value.phoneNo!,
      this.upDatedform.classId=this.loginForm.value.classId!,
      this.upDatedform.dob= this.loginForm.value.dob!
    
    this.formService.updateForm(this.upDatedform.id!,this.upDatedform).subscribe({ 
      next: (response) => { 
        
        window.location.reload();
        console.log(response);
      }
    });
    console.log('Form Updated!');
     
  }
}
