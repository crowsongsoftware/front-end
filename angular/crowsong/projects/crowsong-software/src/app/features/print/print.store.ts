
import { Store } from "../../state-management/store";
import { SelectSection, selectSectionState } from "./print.state";

export class PrintStore extends Store<SelectSection>{
    constructor(){
        super(selectSectionState);
    };
}; 