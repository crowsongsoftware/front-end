import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { HeaderModule } from '../../../../features/header/header.module';
import { LeadershipService } from './leadership.service';
import { LeadershipStore } from './leadership.store';
import { LeadershipComponent } from './leadership.component';
import { LeadershipTopicComponent } from './leadership-topic/leadership-topic.component';
import { leadershipRoutes } from './leadership.routes';

@NgModule({
  declarations: [
    LeadershipComponent,
    LeadershipTopicComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(leadershipRoutes)
  ],
  exports: [
    LeadershipComponent
  ],
  providers:[
    LeadershipService,
    LeadershipStore
  ]
})
export class LeadershipModule { }
