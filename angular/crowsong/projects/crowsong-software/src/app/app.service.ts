/* Angular Core Modules */
import { Injectable } from '@angular/core';

/* Angular Services */
import { Title } from '@angular/platform-browser';

/* App State Management */
import { AppStore } from './app.store';
import { AppState } from './app.state';

@Injectable()
export class AppService {
  constructor(private _titleService: Title, private _appStore: AppStore){
    this._titleService.setTitle(this._appStore.State.title);
  };

  public get State(): AppState{
    return this._appStore.State;
  };

  public set State(state: AppState){
    this._appStore.State = state;
  };
};
