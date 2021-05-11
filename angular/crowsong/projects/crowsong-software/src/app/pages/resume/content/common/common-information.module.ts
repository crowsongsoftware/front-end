import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../../../features/header/header.module';
import { EducationModule } from './education/education.module';
import { LeadershipModule } from './leadership/leadership.module';

import { CoreRoutes } from './common-information.routes';

import { CommonInformationComponent } from './common-information.component';

@NgModule({
  declarations: [
    CommonInformationComponent
  ],
  imports: [
    CommonModule,
    EducationModule,
    HeaderModule,
    LeadershipModule,
    RouterModule.forChild(CoreRoutes)
  ]
})
export class CommonInformationModule { }
