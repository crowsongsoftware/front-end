import { Injectable} from '@angular/core';
import { Store } from '../../state-management/store';
import { resumeState } from './resume.state';
import { Resume } from './resume';;

@Injectable()
export class ResumeStore extends Store<Resume>{
    public constructor(){
        super(resumeState);
    };
};