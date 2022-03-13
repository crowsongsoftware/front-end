import { OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import * as i0 from "@angular/core";
export declare class CardComponent implements OnInit {
    private logger;
    image: string;
    title: string;
    body: Array<string>;
    footer: string;
    cardStyles: string;
    titleStyles: string;
    constructor(logger: NGXLogger);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "lib-card", never, { "image": "image"; "title": "title"; "body": "body"; "footer": "footer"; "cardStyles": "cardStyles"; "titleStyles": "titleStyles"; }, {}, never, never>;
}
//# sourceMappingURL=card.component.d.ts.map