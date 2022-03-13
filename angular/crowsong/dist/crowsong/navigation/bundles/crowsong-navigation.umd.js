(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-logger'), require('@crowsong/image'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@crowsong/navigation', ['exports', '@angular/core', 'ngx-logger', '@crowsong/image', '@angular/common', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.crowsong = global.crowsong || {}, global.crowsong.navigation = {}), global.ng.core, global.i1$1, global['@crowsong/image'], global.ng.common, global.ng.router));
}(this, (function (exports, i0, i1$1, i2, i3, i1) { 'use strict';

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
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var DropdownItemComponent = /** @class */ (function () {
        function DropdownItemComponent() {
            this.image = '';
            this.text = '';
            this.route = '';
            this.styles = '';
            this.items = [];
        }
        DropdownItemComponent.prototype.trackByFn = function (index, item) { return item.id; };
        ;
        ;
        DropdownItemComponent.prototype.ngOnInit = function () { };
        ;
        return DropdownItemComponent;
    }());
    DropdownItemComponent.ɵfac = function DropdownItemComponent_Factory(t) { return new (t || DropdownItemComponent)(); };
    DropdownItemComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DropdownItemComponent, selectors: [["lib-dropdown-item"]], inputs: { image: "image", text: "text", route: "route", styles: "styles", items: "items" }, decls: 2, vars: 4, consts: [[1, "dropdown-button", 3, "routerLink"]], template: function DropdownItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "a", 0);
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleMap(ctx.styles);
                i0__namespace.ɵɵpropertyInterpolate("routerLink", ctx.route);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(ctx.text);
            }
        }, directives: [i1__namespace.RouterLinkWithHref], styles: ["a[_ngcontent-%COMP%]{text-decoration:none}a[_ngcontent-%COMP%]:hover{color:red}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DropdownItemComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-dropdown-item',
                        templateUrl: './dropdown-item.component.html',
                        styleUrls: ['./dropdown-item.component.scss']
                    }]
            }], function () { return []; }, { image: [{
                    type: i0.Input
                }], text: [{
                    type: i0.Input
                }], route: [{
                    type: i0.Input
                }], styles: [{
                    type: i0.Input
                }], items: [{
                    type: i0.Input
                }] });
    })();
    ;

    var NavigationItemComponent = /** @class */ (function () {
        function NavigationItemComponent() {
            this.image = '';
            this.text = '';
            this.route = '';
            this.styles = '';
        }
        ;
        NavigationItemComponent.prototype.ngOnInit = function () {
            console.log("Image Path: ", this.image);
        };
        ;
        return NavigationItemComponent;
    }());
    NavigationItemComponent.ɵfac = function NavigationItemComponent_Factory(t) { return new (t || NavigationItemComponent)(); };
    NavigationItemComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: NavigationItemComponent, selectors: [["navigation-item"]], inputs: { image: "image", text: "text", route: "route", styles: "styles" }, decls: 2, vars: 4, consts: [[3, "routerLink"]], template: function NavigationItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "a", 0);
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleMap(ctx.styles);
                i0__namespace.ɵɵpropertyInterpolate("routerLink", ctx.route);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(ctx.text);
            }
        }, directives: [i1__namespace.RouterLinkWithHref], styles: ["a[_ngcontent-%COMP%]{text-decoration:none}a[_ngcontent-%COMP%]:hover{color:#fff}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NavigationItemComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'navigation-item',
                        templateUrl: './navigation-item.component.html',
                        styleUrls: ['./navigation-item.component.scss']
                    }]
            }], function () { return []; }, { image: [{
                    type: i0.Input
                }], text: [{
                    type: i0.Input
                }], route: [{
                    type: i0.Input
                }], styles: [{
                    type: i0.Input
                }] });
    })();
    ;

    /* Angular Core Components */
    function NavigationComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelement(1, "lib-dropdown-item", 3);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var item_r1 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("image", item_r1.image)("text", item_r1.text)("route", item_r1.route)("styles", item_r1.styles);
        }
    }
    function NavigationComponent_ng_container_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelement(1, "navigation-item", 4);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var item_r1 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("text", item_r1.text)("route", item_r1.route)("styles", item_r1.styles);
        }
    }
    function NavigationComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, NavigationComponent_ng_container_2_ng_container_1_Template, 2, 4, "ng-container", 2);
            i0__namespace.ɵɵtemplate(2, NavigationComponent_ng_container_2_ng_container_2_Template, 2, 3, "ng-container", 2);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", item_r1.isDropdown);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !item_r1.isDropdown);
        }
    }
    var NavigationComponent = /** @class */ (function () {
        function NavigationComponent(logger) {
            this.logger = logger;
            /* Input Properties for Image Library */
            this.imgAlt = '';
            this.imgClass = '';
            this.imgHeight = '';
            this.imgSizes = '';
            this.imgSrc = '';
            this.imgSrcSet = '';
            this.imgStyles = '';
            this.imgUseMap = '';
            this.imgWidth = '';
            /* Input Properties for Navigation Library */
            this.containerStyles = '';
            this.items = [];
        }
        NavigationComponent.prototype.trackByFn = function (index, item) { return item.id; };
        ;
        ;
        NavigationComponent.prototype.ngOnInit = function () {
            this.logger.debug('--------------------');
            this.logger.debug('@crowsong/navigation');
            this.logger.debug('--------------------');
            this.logger.debug("- Image Properties -");
            this.logger.debug("Image Alt: ", this.imgAlt);
            this.logger.debug("Image Class: ", this.imgClass);
            this.logger.debug("Image Height: ", this.imgHeight);
            this.logger.debug("Image Width: ", this.imgWidth);
            this.logger.debug('Image Sizes: ', this.imgSizes);
            this.logger.debug('Image Src: ', this.imgSrc);
            this.logger.debug('Image Src Set: ', this.imgSrcSet);
            this.logger.debug("Image Styles: ", this.imgStyles);
            this.logger.debug("Image Use Map: ", this.imgUseMap);
            this.logger.debug("- Navigation Properties -");
            this.logger.debug('Items: ', this.items);
            this.logger.debug('Container Styles: ', this.containerStyles);
        };
        ;
        return NavigationComponent;
    }());
    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.NGXLogger)); };
    NavigationComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: NavigationComponent, selectors: [["lib-navigation"]], inputs: { imgAlt: "imgAlt", imgClass: "imgClass", imgHeight: "imgHeight", imgSizes: "imgSizes", imgSrc: "imgSrc", imgSrcSet: "imgSrcSet", imgStyles: "imgStyles", imgUseMap: "imgUseMap", imgWidth: "imgWidth", containerStyles: "containerStyles", items: "items" }, decls: 3, vars: 14, consts: [[3, "alt", "height", "sizes", "src", "srcset", "styles", "usemap", "width"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "image", "text", "route", "styles"], [3, "text", "route", "styles"]], template: function NavigationComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "section");
                i0__namespace.ɵɵelement(1, "lib-image", 0);
                i0__namespace.ɵɵtemplate(2, NavigationComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleMap(ctx.containerStyles);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵclassMap(ctx.imgClass);
                i0__namespace.ɵɵproperty("alt", ctx.imgAlt)("height", ctx.imgHeight)("sizes", ctx.imgSizes)("src", ctx.imgSrc)("srcset", ctx.imgSrcSet)("styles", ctx.imgStyles)("usemap", ctx.imgUseMap)("width", ctx.imgWidth);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByFn);
            }
        }, directives: [i2__namespace.ImageDisplayComponent, i3__namespace.NgForOf, i3__namespace.NgIf, DropdownItemComponent, NavigationItemComponent], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NavigationComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-navigation',
                        templateUrl: './navigation.component.html'
                    }]
            }], function () { return [{ type: i1__namespace$1.NGXLogger }]; }, { imgAlt: [{
                    type: i0.Input
                }], imgClass: [{
                    type: i0.Input
                }], imgHeight: [{
                    type: i0.Input
                }], imgSizes: [{
                    type: i0.Input
                }], imgSrc: [{
                    type: i0.Input
                }], imgSrcSet: [{
                    type: i0.Input
                }], imgStyles: [{
                    type: i0.Input
                }], imgUseMap: [{
                    type: i0.Input
                }], imgWidth: [{
                    type: i0.Input
                }], containerStyles: [{
                    type: i0.Input
                }], items: [{
                    type: i0.Input
                }] });
    })();

    var NavigationModule = /** @class */ (function () {
        function NavigationModule() {
        }
        return NavigationModule;
    }());
    NavigationModule.ɵfac = function NavigationModule_Factory(t) { return new (t || NavigationModule)(); };
    NavigationModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: NavigationModule });
    NavigationModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i3.CommonModule,
                i1.RouterModule,
                i2.ImageModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NavigationModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            NavigationComponent,
                            NavigationItemComponent,
                            DropdownItemComponent
                        ],
                        imports: [
                            i3.CommonModule,
                            i1.RouterModule,
                            i2.ImageModule
                        ],
                        exports: [NavigationComponent]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(NavigationModule, { declarations: [NavigationComponent,
                NavigationItemComponent,
                DropdownItemComponent], imports: [i3.CommonModule,
                i1.RouterModule,
                i2.ImageModule], exports: [NavigationComponent] });
    })();

    ;
    // Initialize
    // items: [{text: '', route: ''}], styles: {}};

    /*
     * Public API Surface of test-scoped-library
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NavigationComponent = NavigationComponent;
    exports.NavigationModule = NavigationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=crowsong-navigation.umd.js.map
