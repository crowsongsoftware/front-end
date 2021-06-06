import { Injectable } from '@angular/core';
import { Store } from 'projects/crowsong-software/src/app/state-management/store';
import { leadershipState, LeadershipState } from './leadership.state';

@Injectable()
export class LeadershipStore extends Store<LeadershipState> {
  constructor() { 
    super(leadershipState);
  }
}
