import { Injectable } from '@angular/core';
import { HomeState, state } from './home.state';
import { HomeStore } from './home.store';

@Injectable()
export class HomeService{
    public setState(state: HomeState){
        this.homeStore.State = state;
    };

    public getState(): HomeState{
        return this.homeStore.State;
    };

    constructor(private homeStore: HomeStore){
        this.setState(state);
    };
};