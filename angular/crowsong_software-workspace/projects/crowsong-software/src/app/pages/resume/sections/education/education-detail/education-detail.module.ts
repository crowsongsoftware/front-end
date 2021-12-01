import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationDetailComponent } from './education-detail.component';



@NgModule({
  declarations: [
    EducationDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EducationDetailComponent
  ]
})
export class EducationDetailModule { }
