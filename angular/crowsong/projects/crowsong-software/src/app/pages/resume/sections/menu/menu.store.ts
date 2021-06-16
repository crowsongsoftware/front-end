import { Injectable } from '@angular/core';
import { Store } from 'projects/crowsong-software/src/app/state-management/store';
import { MenuState, menuState } from './menu.state';

@Injectable()
export class MenuStore extends Store<MenuState> {
  constructor() { 
    super(menuState);
  };
};

