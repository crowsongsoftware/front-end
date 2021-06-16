import { Injectable } from '@angular/core';
import { MenuState } from './menu.state';
import { MenuStore } from './menu.store';

@Injectable()
export class MenuService {
  constructor(private headingStore: MenuStore) { };

  public get State(): MenuState {
    return this.headingStore.State;
  };

  public set State(state: MenuState){
    this.headingStore.State = state;
  };
};
