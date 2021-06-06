import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { HeaderModule } from '../../../../features/header/header.module';
import { ExperienceListModule } from './experience-list/experience-list.module';
import { ExperienceDetailsModule } from './experience-details/experience-details.module';
import { experienceRoutes} from './experience.routes';
import { ExperienceService } from './experience.service';
import { ExperienceStore } from './experience.store';
import { ExperienceComponent } from './experience.component';

@NgModule({
  declarations: [ 
    ExperienceComponent 
  ],
  imports: [ 
    CommonModule,
    ExperienceListModule,
    ExperienceDetailsModule,
    HeaderModule,
    RouterModule.forChild(experienceRoutes) 
  ],
  exports: [ ExperienceComponent ],
  providers: [ 
    ExperienceService,
    ExperienceStore ]
})
export class ExperienceModule { }
