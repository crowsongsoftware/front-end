import { Injectable } from '@angular/core';
import { SelectSection } from './select-sections.state';
import { SelectSectionStore } from './select-sections.store';

@Injectable()
export class SelectSectionService{
    constructor(private selectSectionStore: SelectSectionStore){};
    
    public get State(): SelectSection{
        return this.selectSectionStore.State;
    };

    public set state(state: SelectSection){
        this.selectSectionStore.State = state;
    };
};