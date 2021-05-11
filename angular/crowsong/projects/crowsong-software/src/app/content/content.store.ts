import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IContentState, defaultState } from './content.state';

@Injectable()
export class ContentStore{
    private _state: BehaviorSubject<IContentState> = new BehaviorSubject<IContentState>(defaultState);
    
    private _getState(): IContentState{
        return this._state.getValue();
    };

    public set State(state: IContentState){
        this._state.next(state);
    };

    public get State(): IContentState{
        return this._getState();
    };

    constructor(){};
}