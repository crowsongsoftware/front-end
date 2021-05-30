import { Injectable } from '@angular/core';
import { HomeState } from './home.state';
import { HomeStore } from './home.store';

@Injectable()
export class HomeService{
    constructor(private homeStore: HomeStore){ };
    
    public setState(state: HomeState){
        this.homeStore.State = state;
    };

    public getState(): HomeState{
        return this.homeStore.State;
    };
};