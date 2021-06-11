
import { Store } from "../../../state-management/store";
import { SelectSection, selectSectionState } from "./select-sections.state";

export class SelectSectionStore extends Store<SelectSection>{
    constructor(){
        super(selectSectionState);
    };
}; 