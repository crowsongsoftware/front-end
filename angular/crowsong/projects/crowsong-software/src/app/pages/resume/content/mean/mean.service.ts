import { Injectable } from '@angular/core';
import { MeanState } from '../../resume.types';
import { MeanStore } from './mean.store';

@Injectable()
export class MeanService{
    constructor(private meanStore: MeanStore){};
    
    public get State(): MeanState{
        return this.meanStore.State;
    };

    public set State(state: MeanState){
        this.meanStore.State = state;
    };    
};