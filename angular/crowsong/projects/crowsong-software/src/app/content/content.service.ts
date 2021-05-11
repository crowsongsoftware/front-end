import { Injectable } from '@angular/core';
import { IContentState, contentState} from './content.state';
import { ContentStore } from './content.store';

@Injectable()
export class ContentService{
    public get State(): IContentState{
        return this.contentStore.State;
    }

    public set State(state: IContentState){
        this.contentStore.State = state;
    }

    constructor(private contentStore: ContentStore){
        this.State = contentState;
    };
}

