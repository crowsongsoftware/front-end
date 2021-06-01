/* Angular Core Components */
import { Injectable } from '@angular/core';

//* State Management */
import { Store } from '../../../../state-management/store';
import { ExperienceState, defaultState } from './experience.state';

@Injectable()
export class ExperienceStore extends Store<ExperienceState> {
    constructor(){
        super(defaultState);
    };
};