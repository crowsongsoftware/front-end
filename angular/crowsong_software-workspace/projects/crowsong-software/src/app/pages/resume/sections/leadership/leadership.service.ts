import { Injectable } from '@angular/core';
import { LeadershipState } from './leadership.state';
import { LeadershipStore } from './leadership.store';

@Injectable()
export class LeadershipService {
  constructor(private leadershipStore: LeadershipStore) { };

  public get State(): LeadershipState{
    return this.leadershipStore.State;
  }

  public set State(state: LeadershipState){
    this.leadershipStore.State = state;
  }
}
