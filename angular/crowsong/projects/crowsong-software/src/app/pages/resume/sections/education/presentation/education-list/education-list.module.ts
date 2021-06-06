import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationListComponent } from './education-list.component';


@NgModule({
  declarations: [
    EducationListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EducationListComponent
  ]
})
export class EducationListModule { }
