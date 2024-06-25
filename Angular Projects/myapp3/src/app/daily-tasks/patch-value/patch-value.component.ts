import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patch-value',
  templateUrl: './patch-value.component.html',
  styleUrls: ['./patch-value.component.scss']
})
export class PatchValueComponent {
  products = [
    { name: 'product1' },
    { name: 'product2' }
  ]
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  isEditMode = false;
  selectedIndex=0;
  add() {
 
this.products.push({name:this.productForm.controls.name.value!})
 
    this.isEditMode=false;
    this.productForm.controls.name.reset();

  }
 
  editModeOn(index:number){
this.productForm.controls.name.patchValue(this.products[index].name);
    this.isEditMode=true;
    this.selectedIndex=index;
  }
  edit() {
this.products[this.selectedIndex].name=this.productForm.controls.name.value!;
    this.isEditMode=false;
this.productForm.controls.name.reset();
  }
 
  delete(index:number){
    this.products.splice(index,1);
    this.isEditMode=false;
    this.productForm.controls.name.reset();
 
  }
  clear(){
    this.isEditMode=false;
    this.productForm.controls.name.reset();
  }
}
