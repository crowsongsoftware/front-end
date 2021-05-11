import { Injectable } from '@angular/core';
import { MenuState, menuState } from './menu.state';
import { MenuStore } from './menu.store';

@Injectable()
export class MenuService{
    set MenuState(state: MenuState){
        this.menuStore.State =  state;
    };

    get MenuState(){
        return this.menuStore.State;
    };

    constructor(private menuStore: MenuStore){
        this.menuStore.State = menuState;
    };
}