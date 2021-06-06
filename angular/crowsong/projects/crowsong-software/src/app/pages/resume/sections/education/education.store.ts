import { BehaviorSubject, Observable } from "rxjs";
import { Store } from "../../../../state-management/store";
import { Education } from "./education";
import { educationState } from "./education.state";

export class EducationStore extends Store<Education>{
    constructor(){
        super(educationState);
    };
}; 
