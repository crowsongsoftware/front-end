import { Injectable } from '@angular/core';
import { Resume } from './resume';
import { resumeState } from './resume.state';
import { ResumeStore } from './resume.store';

@Injectable()
  export class ResumeService{  
    constructor(private resumeStore: ResumeStore) {
      this.resumeStore.State = resumeState;
    };
    
    public get State(): Resume{
      return this.resumeStore.State;
    };

    public set State(state: Resume){
      this.resumeStore.State = state;
    };
  }
  