import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderModule } from '../../../../features/header/header.module';
import { ExperienceModule } from '../sections/experience/experience.module';
import { SkillsModule } from '../sections/skills/skills.module';

import { MeanService } from './mean.service';
import { MeanStore } from './mean.store';

import { MeanRoutes } from './mean.routes';

import { MeanComponent } from './mean.component';

@NgModule({
    declarations: [
        MeanComponent
    ],
    imports: [
        CommonModule,
        ExperienceModule,
        HeaderModule,
        RouterModule.forChild(MeanRoutes),
        SkillsModule
    ],
    exports: [
        MeanComponent
    ],
    providers:[
        MeanService,
        MeanStore
    ]
})
export class MeanModule { }
