import { Injectable } from '@angular/core';
import { Education } from './education';
import { EducationStore } from './education.store';

@Injectable()
export class EducationService{
    constructor(private educationStore: EducationStore){};
    
    public get State(): Education{
        return this.educationStore.State;
    };

    public set state(state: Education){
        this.educationStore.State = state;
    };
};