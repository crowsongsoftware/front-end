
import { Injectable } from "@angular/core";
import { Store } from "../../../../../state-management/store";
import { EducationState, educationState } from "./education.state";

@Injectable()
export class EducationStore extends Store<EducationState>{
    constructor(){
        super(educationState);
    };
}; 

