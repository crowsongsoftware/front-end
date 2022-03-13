import { OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import * as i0 from "@angular/core";
export declare class ImageDisplayComponent implements OnInit {
    private logger;
    alt: string;
    sizes: string;
    srcset: string;
    usemap: string;
    src: string;
    class: string;
    styles: string;
    width: string;
    maxWidth: string;
    height: string;
    maxHeight: string;
    constructor(logger: NGXLogger);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageDisplayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageDisplayComponent, "lib-image", never, { "alt": "alt"; "sizes": "sizes"; "srcset": "srcset"; "usemap": "usemap"; "src": "src"; "class": "class"; "styles": "styles"; "width": "width"; "maxWidth": "maxWidth"; "height": "height"; "maxHeight": "maxHeight"; }, {}, never, never>;
}
//# sourceMappingURL=image-display.component.d.ts.map