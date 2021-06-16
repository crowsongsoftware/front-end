import { Injectable } from '@angular/core';
import { PrintState } from './print.state';
import { PrintStore } from './print.store';

@Injectable()
export class PrintService{
    constructor(private printStore: PrintStore){};
    
    public get State(): PrintState{
        return this.printStore.State;
    };

    public set state(state: PrintState){
        this.printStore.State = state;
    };
};