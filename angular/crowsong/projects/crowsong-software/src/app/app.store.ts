/* Angular Core Components */
import { Injectable } from '@angular/core';

//* State Management */
import { Store } from './state-management/store';
import { AppState, appState } from './app.state';

@Injectable()
export class AppStore extends Store<AppState> {
    constructor(){
        super(appState);
    };
};