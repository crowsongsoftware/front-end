import { Injectable } from '@angular/core';
import { meanState} from './mean.state';
import { MeanState } from '../../resume.types';
import { Store } from '../../../../state-management/store';

@Injectable()
export class MeanStore extends Store<MeanState>{
    constructor(){
        super(meanState);
    }
}