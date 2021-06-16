import { Injectable } from '@angular/core';
import { SelectSection } from './select-sections.state';
import { SelectSectionStore } from './select-sections.store';

@Injectable()
export class SelectSectionService{
    constructor(private educationStore: SelectSectionStore){};
    
    public get State(): SelectSection{
        return this.educationStore.State;
    };

    public set state(state: SelectSection){
        this.educationStore.State = state;
    };
};