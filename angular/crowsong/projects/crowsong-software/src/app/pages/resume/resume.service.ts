import { Injectable } from '@angular/core';
import { ResumeState } from './resume.types';
import { resumeState } from './resume.state';
import { ResumeStore } from './resume.store';

@Injectable()
  export class ResumeService{  
    constructor(private resumeStore: ResumeStore) {
      this.resumeStore.State = resumeState;
    };
    
    public get State(): ResumeState{
      return this.resumeStore.State;
    };

    public set State(state: ResumeState){
      this.resumeStore.State = state;
    };
  }
  