import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceListComponent } from './experience-list.component';

@NgModule({
  declarations: [
    ExperienceListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExperienceListComponent
  ]
})
export class ExperienceListModule { }
