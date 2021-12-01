import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '../../state-management/store';
import { HomeState, defaultState } from './home.state';

@Injectable()
export class HomeStore extends Store<HomeState>{
    private _state: BehaviorSubject<HomeState> = new BehaviorSubject<HomeState>(defaultState);
    
    public set State(state: HomeState){
        this._state.next(state);
    };

    public get State(): HomeState{
        return this._state.getValue();
    };

    constructor(){
        super(defaultState);
    };
};

