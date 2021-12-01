import { Injectable } from '@angular/core';
import { IntroductionState, state } from './introduction.state';
import { IntroductionStore } from './introduction.store';

@Injectable()
export class IntroductionService{
    public setState(state: IntroductionState){
        this.introductionStore.State = state;
    };

    public getState(): IntroductionState{
        return this.introductionStore.State;
    };

    constructor(private introductionStore: IntroductionStore){
        this.setState(state);
    };
};