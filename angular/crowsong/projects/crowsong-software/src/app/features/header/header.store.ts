import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '../../state-management/store';
import { HeaderState, headerState } from './header.state';

@Injectable()
export class HeaderStore extends Store<HeaderState>{
  constructor() {
    super(headerState);
  };
}
