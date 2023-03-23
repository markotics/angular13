import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as CONSTANT_LIST from '../../constant/constant-list';

@Component({
  selector: 'app-search',
  styleUrls: ['./search.component.scss'],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  public constantList = CONSTANT_LIST;

  public formGroup: FormGroup = new FormGroup({});
dropDown2:any=[];
  dropDown1:any=[];
  filterData: any=null;

  constructor(private formBuilder: FormBuilder, public router: Router) {
   this.get();
   }
   get(){
    this.dropDown1=this.constantList.dropdown1;
   
   }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      task: ['', Validators.required],
      audiance: ['', Validators.required],
    })
  }
  getErrorMessage(formElementName: string): any {
    let formElement = this.formGroup.get(formElementName);
    if (formElement?.touched) {
      if (formElement?.errors) {
        if (formElementName === "task" && formElement.errors) {
          return "It's required!";
        }
        if (formElementName === "audiance" && formElement.errors) {
          return "It's required!";
        }
      }
    }
  }
  checkFirstDropdown(event:any){
    this.dropDown2=this.constantList.dropdown2.filter((c:any)=>c.dropdown1_id == event.value);
 }
//  checkSecondDropdown(event:any){
//   this.constantList.dropdown2.filter((d:any)=>{
//     if(d.id == event.value){
//       this.dropDown1=this.constantList.dropdown1.filter((c:any)=>c.id == d.dropdown1_id);
//       console.log( this.dropDown1)
//      console.log(event.value);
//     }
//   })
  
// }
  onSubmit() {
    if (this.formGroup.valid) {
      this.filterData=this.constantList.cardsData.filter((c:any)=>c.dropdown1_id == this.formGroup.value.task && c.dropdown2_id == this.formGroup.value.audiance);

    }
    else {
      this.formGroup?.markAllAsTouched();
    }
  }

}
