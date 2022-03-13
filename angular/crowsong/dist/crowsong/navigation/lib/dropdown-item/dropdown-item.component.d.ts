import { OnInit } from '@angular/core';
import { Item } from '../item/item';
import * as i0 from "@angular/core";
export declare class DropdownItemComponent implements OnInit {
    image: string;
    text: string;
    route: string;
    styles: string;
    items: Array<Item>;
    trackByFn(index: number, item: any): any;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownItemComponent, "lib-dropdown-item", never, { "image": "image"; "text": "text"; "route": "route"; "styles": "styles"; "items": "items"; }, {}, never, never>;
}
//# sourceMappingURL=dropdown-item.component.d.ts.map