import { BehaviorSubject, Observable } from "rxjs";
import { Store } from "../../../../../state-management/store";
import { EducationState} from "../../../resume.types";
import { educationState } from "./education.state";

export class EducationStore extends Store<EducationState>{
    constructor(){
        super(educationState);
    };
}; 
