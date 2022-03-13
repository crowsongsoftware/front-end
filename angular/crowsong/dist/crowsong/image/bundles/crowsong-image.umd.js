(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-logger'), require('@angular/common'), require('ngx-image-cropper')) :
    typeof define === 'function' && define.amd ? define('@crowsong/image', ['exports', '@angular/core', 'ngx-logger', '@angular/common', 'ngx-image-cropper'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.crowsong = global.crowsong || {}, global.crowsong.image = {}), global.ng.core, global.i1, global.ng.common, global['ngx-image-cropper']));
}(this, (function (exports, i0, i1, i2, ngxImageCropper) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    var ImageCropComponent = /** @class */ (function () {
        function ImageCropComponent() {
        }
        ;
        ImageCropComponent.prototype.ngOnInit = function () { };
        ;
        return ImageCropComponent;
    }());
    ImageCropComponent.ɵfac = function ImageCropComponent_Factory(t) { return new (t || ImageCropComponent)(); };
    ImageCropComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ImageCropComponent, selectors: [["lib-crop"]], decls: 2, vars: 0, template: function ImageCropComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵtext(1, "crop works!");
                i0__namespace.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ImageCropComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-crop',
                        templateUrl: './image-crop.component.html'
                    }]
            }], function () { return []; }, null);
    })();

    var ImageDisplayComponent = /** @class */ (function () {
        function ImageDisplayComponent(logger) {
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
        ImageDisplayComponent.prototype.ngOnInit = function () {
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
        };
        ;
        return ImageDisplayComponent;
    }());
    ImageDisplayComponent.ɵfac = function ImageDisplayComponent_Factory(t) { return new (t || ImageDisplayComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace.NGXLogger)); };
    ImageDisplayComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ImageDisplayComponent, selectors: [["lib-image"]], inputs: { alt: "alt", sizes: "sizes", srcset: "srcset", usemap: "usemap", src: "src", class: "class", styles: "styles", width: "width", maxWidth: "maxWidth", height: "height", maxHeight: "maxHeight" }, decls: 1, vars: 8, consts: [[3, "ngClass", "src"]], template: function ImageDisplayComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "img", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleMap(ctx.styles);
                i0__namespace.ɵɵstyleProp("max-width", ctx.maxWidth)("height", ctx.maxHeight);
                i0__namespace.ɵɵproperty("ngClass", ctx.class)("src", ctx.src, i0__namespace.ɵɵsanitizeUrl);
            }
        }, directives: [i2__namespace.NgClass], styles: [".responsive-scale-both[_ngcontent-%COMP%]{width:100%;height:auto}.responsive-scale-down[_ngcontent-%COMP%]{max-width:100%;height:auto}.responsive-max-size[_ngcontent-%COMP%]{width:100%;max-width:400px;height:auto}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ImageDisplayComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-image',
                        templateUrl: './image-display.component.html',
                        styleUrls: ['./image-display.component.scss']
                    }]
            }], function () { return [{ type: i1__namespace.NGXLogger }]; }, { alt: [{
                    type: i0.Input
                }], sizes: [{
                    type: i0.Input
                }], srcset: [{
                    type: i0.Input
                }], usemap: [{
                    type: i0.Input
                }], src: [{
                    type: i0.Input
                }], class: [{
                    type: i0.Input
                }], styles: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }], maxWidth: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }], maxHeight: [{
                    type: i0.Input
                }] });
    })();

    var ImageUploadComponent = /** @class */ (function () {
        function ImageUploadComponent() {
        }
        ImageUploadComponent.prototype.ngOnInit = function () {
        };
        return ImageUploadComponent;
    }());
    ImageUploadComponent.ɵfac = function ImageUploadComponent_Factory(t) { return new (t || ImageUploadComponent)(); };
    ImageUploadComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ImageUploadComponent, selectors: [["lib-upload"]], decls: 2, vars: 0, template: function ImageUploadComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵtext(1, "upload works!");
                i0__namespace.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ImageUploadComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-upload',
                        templateUrl: './image-upload.component.html'
                    }]
            }], function () { return []; }, null);
    })();

    var ImageModule = /** @class */ (function () {
        function ImageModule() {
        }
        return ImageModule;
    }());
    ImageModule.ɵfac = function ImageModule_Factory(t) { return new (t || ImageModule)(); };
    ImageModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ImageModule });
    ImageModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.CommonModule,
                ngxImageCropper.ImageCropperModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ImageModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ImageCropComponent,
                            ImageDisplayComponent,
                            ImageUploadComponent
                        ],
                        imports: [
                            i2.CommonModule,
                            ngxImageCropper.ImageCropperModule
                        ],
                        exports: [
                            ImageCropComponent,
                            ImageDisplayComponent,
                            ImageUploadComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ImageModule, { declarations: [ImageCropComponent,
                ImageDisplayComponent,
                ImageUploadComponent], imports: [i2.CommonModule,
                ngxImageCropper.ImageCropperModule], exports: [ImageCropComponent,
                ImageDisplayComponent,
                ImageUploadComponent] });
    })();

    /*
     * Public API Surface of image
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ImageCropComponent = ImageCropComponent;
    exports.ImageDisplayComponent = ImageDisplayComponent;
    exports.ImageModule = ImageModule;
    exports.ImageUploadComponent = ImageUploadComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=crowsong-image.umd.js.map
