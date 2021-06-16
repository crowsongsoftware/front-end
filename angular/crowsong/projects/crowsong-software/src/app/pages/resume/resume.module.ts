import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { MenuModule } from '../../features/menu/menu.module';
import { HeaderModule } from '../../features/header/header.module';
import { PrintModule } from '../../features/print/print.module';
import { ResumeService } from './resume.service';
import { ResumeStore } from './resume.store';
import { resumeRoutes } from './resume.routes';
import { ResumeComponent } from './resume.component';
import { DisplayResumeComponent } from './display-resume/display-resume.component';
import { EducationService } from './sections/education/education-state/education.service';
import { EducationStore } from './sections/education/education-state/education.store';
import { HeadingComponent } from './sections/heading/heading.component';
import { HeadingService } from './sections/heading/heading.service';
import { HeadingStore } from './state-management/heading/heading.store';

@NgModule({
    declarations: [
        DisplayResumeComponent,
        HeadingComponent,
        ResumeComponent
    ],
    imports: [
        CommonModule,
        HeaderModule,
        MenuModule,
        PrintModule,
        RouterModule.forChild(resumeRoutes)
      ],
    exports: [ 
        ResumeComponent 
    ],
    providers:[
        EducationService,
        EducationStore,
        HeadingService,
        HeadingStore,
        ResumeService, 
        ResumeStore
    ]
})
export class ResumeModule {
    constructor(private logger: NGXLogger){
        console.clear();
        this.logger.debug('----------------');
        this.logger.debug('- ResumeModule -');
        this.logger.debug('----------------');
    };
 };
