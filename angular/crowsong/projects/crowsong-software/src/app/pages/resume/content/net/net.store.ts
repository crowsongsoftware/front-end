import { Injectable } from '@angular/core';
import { NetState } from '../../resume.types';
import { netState } from './net.state';
import { Store } from '../../../../state-management/store';

@Injectable()
export class NetStore extends Store<NetState>{
    constructor(){
        super(netState);
    }
}