import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { AppStore } from './app.store';
import { AppState } from './app.state';

@Injectable()
export class AppService {
  constructor(private _titleService: Title, 
              private _appStore: AppStore,
              private _logger: NGXLogger){
      this._logger.debug('----------------');
      this._logger.debug('- AppService -');
      this._logger.debug('----------------');
      this._logger.debug('Title: ', this._appStore.State.title);
      this._titleService.setTitle(this._appStore.State.title);
  };

  public get State(): AppState{
    return this._appStore.State;
  };

  public set State(state: AppState){
    this._appStore.State = state;
  };
};
