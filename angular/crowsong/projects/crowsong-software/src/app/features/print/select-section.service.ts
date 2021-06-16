import { Injectable } from '@angular/core';
import { SelectSectionStore } from './select-section.store';
import { selectSectionState, SelectSectionState } from './print.state';

@Injectable()
export class SelectSectionService{
    constructor(private selectSectionStore: SelectSectionStore){};
    
    public get State(): SelectSectionState{
        return this.selectSectionStore.State;
    };

    public set state(state: SelectSectionState){
        this.selectSectionStore.State = state;
    };
};