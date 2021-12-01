import { Injectable } from '@angular/core';
import { HeadingState } from './heading.state';
import { HeadingStore } from './heading.store';

@Injectable()
export class HeadingService {
  constructor(private headingStore: HeadingStore) { };

  public get State(): HeadingState {
    return this.headingStore.State;
  };

  public set State(state: HeadingState){
    this.headingStore.State = state;
  };
};
