import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderModule } from '../../../../features/header/header.module';
import { ExperienceModule } from '../sections/experience/experience.module';
import { SkillsModule } from '../sections/skills/skills.module';

import { NetService } from './net.service';
import { NetStore } from './net.store';

import { NetRoutes } from './net.routes';

import { NetComponent } from './net.component';

@NgModule({
    declarations: [
        NetComponent
    ],
    imports: [
        CommonModule,
        ExperienceModule,
        HeaderModule,
        RouterModule.forChild(NetRoutes),
        SkillsModule
    ],
    exports: [
        NetComponent
    ],
    providers:[
        NetService,
        NetStore
    ]
})
export class NetModule { }
