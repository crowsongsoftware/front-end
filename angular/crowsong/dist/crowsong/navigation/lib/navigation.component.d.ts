import { OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Item } from './item/item';
import * as i0 from "@angular/core";
export declare class NavigationComponent implements OnInit {
    private logger;
    imgAlt: string;
    imgClass: string;
    imgHeight: string;
    imgSizes: string;
    imgSrc: string;
    imgSrcSet: string;
    imgStyles: string;
    imgUseMap: string;
    imgWidth: string;
    containerStyles: string;
    items: Array<Item>;
    trackByFn(index: number, item: any): any;
    constructor(logger: NGXLogger);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavigationComponent, "lib-navigation", never, { "imgAlt": "imgAlt"; "imgClass": "imgClass"; "imgHeight": "imgHeight"; "imgSizes": "imgSizes"; "imgSrc": "imgSrc"; "imgSrcSet": "imgSrcSet"; "imgStyles": "imgStyles"; "imgUseMap": "imgUseMap"; "imgWidth": "imgWidth"; "containerStyles": "containerStyles"; "items": "items"; }, {}, never, never>;
}
//# sourceMappingURL=navigation.component.d.ts.map