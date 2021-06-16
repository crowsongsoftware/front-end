import { Store } from "../../state-management/store";
import { SelectSectionState, selectSectionState } from "./print.state";

export class SelectSectionStore extends Store<SelectSectionState>{
    constructor(){
        super(selectSectionState);
    };
}; 