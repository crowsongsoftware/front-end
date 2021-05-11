import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IntroductionState, defaultState } from './introduction.state';

@Injectable()
export class IntroductionStore{
    private _state: BehaviorSubject<IntroductionState> = new BehaviorSubject<IntroductionState>(defaultState);
    
    public set State(state: IntroductionState){
        this._state.next(state);
    };

    public get State(): IntroductionState{
        return this._state.getValue();
    };

    constructor(){};
};
