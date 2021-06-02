import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { MenuModule } from '../../features/menu/menu.module';
import { HeaderModule } from '../../features/header/header.module';
import { ResumeService } from './resume.service';
import { ResumeStore } from './resume.store';
import { resumeRoutes } from './resume.routes';
import { ResumeComponent } from './resume.component';
import { DisplayResumeComponent } from './display-resume/display-resume.component';
import { PrintResumeComponent } from './print-resume/print-resume.component';

@NgModule({
    declarations: [
        ResumeComponent,
        DisplayResumeComponent,
        PrintResumeComponent
    ],
    imports: [
        CommonModule,
        HeaderModule,
        MenuModule,
        RouterModule.forChild(resumeRoutes)
      ],
    exports: [ 
        ResumeComponent 
    ],
    providers:[
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
