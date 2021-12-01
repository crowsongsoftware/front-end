import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Store } from './state-management/store';
import { AppState, appState } from './app.state';

@Injectable()
export class AppStore extends Store<AppState> {
    constructor(private _logger: NGXLogger){
        super(appState);
        this._logger.debug('------------');
        this._logger.debug('- AppStore -');
        this._logger.debug('------------');
        this._logger.debug('appState: ', appState);
    };
};