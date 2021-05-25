/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Crowsong Software Feature Modules */
import { MenuModule } from '../../features/menu/menu.module';
import { HeaderModule } from '../../features/header/header.module';

/* Resume Services/Store/Routes */
import { ResumeService } from './resume.service';
import { ResumeStore } from './resume.store';
import { resumeRoutes } from './resume.routes';

/* Resume Components */
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
export class ResumeModule { }
