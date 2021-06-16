import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { MenuModule } from '../../features/menu/menu.module';
import { HeaderModule } from '../../features/header/header.module';
import { PrintModule } from '../../features/print/print.module';
import { resumeRoutes } from './resume.routes';
import { ResumeComponent } from './resume.component';
import { DisplayResumeComponent } from './display-resume/display-resume.component';
import { HeadingComponent } from './sections/heading/heading.component';
import { HeadingService } from './sections/heading/heading.service';
import { HeadingStore } from './sections/heading/heading.store';

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
        HeadingService,
        HeadingStore,
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
