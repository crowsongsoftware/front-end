import { Injectable } from '@angular/core';
import { Store } from 'projects/crowsong-software/src/app/state-management/store';
import { HeadingState, headingState } from './heading.state';

@Injectable()
export class HeadingStore extends Store<HeadingState> {
  constructor() { 
    super(headingState);
  }
}