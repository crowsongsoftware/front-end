import { Injectable } from '@angular/core';
import { HomeState } from './home.state';
import { HomeStore } from './home.store';

@Injectable()
export class HomeService{
    constructor(private homeStore: HomeStore){ };
    
    public set State(state: HomeState){
        this.homeStore.State = state;
    };

    public get State(): HomeState{
        return this.homeStore.State;
    };
};