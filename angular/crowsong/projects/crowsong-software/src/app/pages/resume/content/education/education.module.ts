import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../../../features/header/header.module';
import { LoggerModule, NGXLogger } from 'ngx-logger';
import { EducationService } from './education.service';
import { EducationStore } from './education.store';
import { educationRoutes } from './education.routes';
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
    LoggerModule,
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
export class EducationModule implements OnInit { 
  constructor(private logger: NGXLogger){
    console.log('Education Module: constructor');
  };

  ngOnInit(){
    //console.clear();
    this.logger.debug('-------------------');
    this.logger.debug('- EducationModule -');
    this.logger.debug('-------------------');
  };
};
