import { Injectable } from '@angular/core';
import { NetState } from '../../resume.types';
import { NetStore } from './net.store';

@Injectable()
export class NetService{
    constructor(private netStore: NetStore){};
    
    public get State(): NetState{
        return this.netStore.State;
    };

    public set State(state: NetState){
        this.netStore.State = state;
    };
};