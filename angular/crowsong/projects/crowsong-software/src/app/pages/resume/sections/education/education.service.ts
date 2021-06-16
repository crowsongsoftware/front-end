import { Injectable } from '@angular/core';
import { EducationState } from './education.state';
import { EducationStore } from './education.store';

@Injectable()
export class EducationService{
    constructor(private educationStore: EducationStore){};
    
    public get State(): EducationState{
        return this.educationStore.State;
    };

    public set state(state: EducationState){
        this.educationStore.State = state;
    };
};