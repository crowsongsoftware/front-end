import { Injectable } from '@angular/core';
import { ExperienceState } from './experience.state';
import { ExperienceStore } from './experience.store';

@Injectable()
export class ExperienceService{
    constructor(private _store: ExperienceStore){ };

    public get State(): ExperienceState{
        return this._store.State;
    }
};