/* Angular Core Modules */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Angular Services */
import { Title } from '@angular/platform-browser';

/* App State Management */
import { AppStore } from './app.store';
import { AppState } from './app.state';

@Injectable()
export class AppService {
  constructor( private _appStore: AppStore, private _titleService: Title, private _http: HttpClient ){
    this._titleService.setTitle(this._appStore.State.title);
  };

  public get State(): AppState{
    return this._appStore.State;
  };

  public set State(state: AppState){
    this._appStore.State = state;
  };
};
