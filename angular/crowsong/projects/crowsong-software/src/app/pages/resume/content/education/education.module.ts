import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { educationRoutes } from './education.routes';

import { HeaderModule } from '../../../../features/header/header.module';

import { EducationService } from './education.service';
import { EducationStore } from './education.store';

import { EducationComponent } from './education.component';
import { InstitutionComponent } from './institution/institution.component';

@NgModule({
  declarations: [
    EducationComponent,
    InstitutionComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(educationRoutes)
  ],
  exports: [
    EducationComponent
  ],
  providers: [
    EducationService,
    EducationStore
  ]
})
export class EducationModule { }
