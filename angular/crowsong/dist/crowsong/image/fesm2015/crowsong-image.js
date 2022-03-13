import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from 'ngx-logger';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';

class ImageCropComponent {
    constructor() { }
    ;
    ngOnInit() { }
    ;
}
ImageCropComponent.ɵfac = function ImageCropComponent_Factory(t) { return new (t || ImageCropComponent)(); };
ImageCropComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImageCropComponent, selectors: [["lib-crop"]], decls: 2, vars: 0, template: function ImageCropComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "crop works!");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageCropComponent, [{
        type: Component,
        args: [{
                selector: 'lib-crop',
                templateUrl: './image-crop.component.html'
            }]
    }], function () { return []; }, null); })();

class ImageDisplayComponent {
    constructor(logger) {
        this.logger = logger;
        /* Image Attributes */
        this.alt = '';
        this.sizes = '';
        this.srcset = '';
        this.usemap = '';
        /* Angular Bindings */
        this.src = '';
        this.class = '';
        this.styles = '';
        /* Image Width */
        this.width = '';
        this.maxWidth = '100%';
        /* Image Height */
        this.height = 'auto';
        this.maxHeight = '';
    }
    ;
    ngOnInit() {
        this.logger.debug('-------------------------');
        this.logger.debug('- @crowsong/image -');
        this.logger.debug('- ImageDisplayComponent -');
        this.logger.debug('-------------------------');
        this.logger.debug('- Image Properties -');
        this.logger.debug('alt: ', this.alt);
        this.logger.debug('sizes: ', this.sizes);
        this.logger.debug('srcset: ', this.srcset);
        this.logger.debug('usemap: ', this.usemap);
        this.logger.debug('height: ', this.height);
        this.logger.debug('maxHeight: ', this.maxHeight);
        this.logger.debug('width: ', this.width);
        this.logger.debug('maxWidth: ', this.maxWidth);
        this.logger.debug('- Image Style Properties -');
        this.logger.debug('class: ', this.class);
        this.logger.debug('styles: ', this.styles);
    }
    ;
}
ImageDisplayComponent.ɵfac = function ImageDisplayComponent_Factory(t) { return new (t || ImageDisplayComponent)(i0.ɵɵdirectiveInject(i1.NGXLogger)); };
ImageDisplayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImageDisplayComponent, selectors: [["lib-image"]], inputs: { alt: "alt", sizes: "sizes", srcset: "srcset", usemap: "usemap", src: "src", class: "class", styles: "styles", width: "width", maxWidth: "maxWidth", height: "height", maxHeight: "maxHeight" }, decls: 1, vars: 8, consts: [[3, "ngClass", "src"]], template: function ImageDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "img", 0);
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.styles);
        i0.ɵɵstyleProp("max-width", ctx.maxWidth)("height", ctx.maxHeight);
        i0.ɵɵproperty("ngClass", ctx.class)("src", ctx.src, i0.ɵɵsanitizeUrl);
    } }, directives: [i2.NgClass], styles: [".responsive-scale-both[_ngcontent-%COMP%]{width:100%;height:auto}.responsive-scale-down[_ngcontent-%COMP%]{max-width:100%;height:auto}.responsive-max-size[_ngcontent-%COMP%]{width:100%;max-width:400px;height:auto}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageDisplayComponent, [{
        type: Component,
        args: [{
                selector: 'lib-image',
                templateUrl: './image-display.component.html',
                styleUrls: ['./image-display.component.scss']
            }]
    }], function () { return [{ type: i1.NGXLogger }]; }, { alt: [{
            type: Input
        }], sizes: [{
            type: Input
        }], srcset: [{
            type: Input
        }], usemap: [{
            type: Input
        }], src: [{
            type: Input
        }], class: [{
            type: Input
        }], styles: [{
            type: Input
        }], width: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], height: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }] }); })();

class ImageUploadComponent {
    constructor() { }
    ngOnInit() {
    }
}
ImageUploadComponent.ɵfac = function ImageUploadComponent_Factory(t) { return new (t || ImageUploadComponent)(); };
ImageUploadComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImageUploadComponent, selectors: [["lib-upload"]], decls: 2, vars: 0, template: function ImageUploadComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "upload works!");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageUploadComponent, [{
        type: Component,
        args: [{
                selector: 'lib-upload',
                templateUrl: './image-upload.component.html'
            }]
    }], function () { return []; }, null); })();

class ImageModule {
}
ImageModule.ɵfac = function ImageModule_Factory(t) { return new (t || ImageModule)(); };
ImageModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ImageModule });
ImageModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            ImageCropperModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ImageCropComponent,
                    ImageDisplayComponent,
                    ImageUploadComponent
                ],
                imports: [
                    CommonModule,
                    ImageCropperModule
                ],
                exports: [
                    ImageCropComponent,
                    ImageDisplayComponent,
                    ImageUploadComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ImageModule, { declarations: [ImageCropComponent,
        ImageDisplayComponent,
        ImageUploadComponent], imports: [CommonModule,
        ImageCropperModule], exports: [ImageCropComponent,
        ImageDisplayComponent,
        ImageUploadComponent] }); })();

/*
 * Public API Surface of image
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ImageCropComponent, ImageDisplayComponent, ImageModule, ImageUploadComponent };
//# sourceMappingURL=crowsong-image.js.map
