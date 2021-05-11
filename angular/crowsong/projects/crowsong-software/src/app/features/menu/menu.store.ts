import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '../../state-management/store';
import { MenuState, menuState } from './menu.state';

@Injectable()
export class MenuStore extends Store<MenuState>{
    constructor(){
        super(menuState);
    };
};