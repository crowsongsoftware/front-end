import { OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import * as i0 from "@angular/core";
export declare class ListComponent implements OnInit {
    private logger;
    list: Array<any>;
    styles: string;
    trackByFn(index: number, item: any): any;
    constructor(logger: NGXLogger);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListComponent, "lib-list", never, { "list": "list"; "styles": "styles"; }, {}, never, never>;
}
//# sourceMappingURL=list.component.d.ts.map