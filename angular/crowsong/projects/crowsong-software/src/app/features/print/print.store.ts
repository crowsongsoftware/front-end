
import { Store } from "../../state-management/store";
import { PrintPageState, printPageState } from "./print.state";

export class PrintStore extends Store<PrintPageState>{
    constructor(){
        super(printPageState);
    };
}; 