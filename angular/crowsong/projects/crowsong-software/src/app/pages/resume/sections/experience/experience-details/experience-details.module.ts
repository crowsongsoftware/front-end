import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceDetailsComponent } from './experience-details.component';



@NgModule({
  declarations: [
    ExperienceDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExperienceDetailsComponent
  ]
})
export class ExperienceDetailsModule { }
