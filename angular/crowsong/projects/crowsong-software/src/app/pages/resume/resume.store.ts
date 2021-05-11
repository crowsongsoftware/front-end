import { Injectable} from '@angular/core';
import { Store } from '../../state-management/store';
import { resumeState } from './resume.state';
import { ResumeState} from './resume.types';

@Injectable()
export class ResumeStore extends Store<ResumeState>{
    public constructor(){
        super(resumeState);
    };
};