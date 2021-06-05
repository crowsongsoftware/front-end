import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { HeaderModule } from '../../../../features/header/header.module';
import { EducationService } from './education.service';
import { EducationStore } from './education.store';
import { educationRoutes } from './education.routes';
import { EducationComponent } from './education.component';
import { InstitutionComponent } from './institution/institution.component';
import { EducationListComponent } from './education-list/education-list.component';

@NgModule({
  declarations: [
    EducationComponent,
    InstitutionComponent,
    EducationListComponent
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
export class EducationModule{ 
  constructor(private logger: NGXLogger){
    console.clear();
    this.logger.debug('-------------------');
    this.logger.debug('- EducationModule -');
    this.logger.debug('-------------------');
  };
};
