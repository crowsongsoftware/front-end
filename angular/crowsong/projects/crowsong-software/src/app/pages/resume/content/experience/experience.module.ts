import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import {experienceRoutes} from './experience.routes';

import { HeaderModule } from '../../../../features/header/header.module';

import { ExperienceComponent } from './experience.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';

@NgModule({
  declarations: [ 
    ExperienceComponent, 
    ExperienceListComponent 
  ],
  imports: [ 
    CommonModule,
    HeaderModule,
    RouterModule.forChild(experienceRoutes) 
  ],
  exports: [ ExperienceComponent ]
})
export class ExperienceModule { }
