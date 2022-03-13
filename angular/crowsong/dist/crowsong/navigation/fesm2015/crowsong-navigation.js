import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1$1 from 'ngx-logger';
import * as i2 from '@crowsong/image';
import { ImageModule } from '@crowsong/image';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';

class DropdownItemComponent {
    constructor() {
        this.image = '';
        this.text = '';
        this.route = '';
        this.styles = '';
        this.items = [];
    }
    trackByFn(index, item) { return item.id; }
    ;
    ;
    ngOnInit() { }
    ;
}
DropdownItemComponent.ɵfac = function DropdownItemComponent_Factory(t) { return new (t || DropdownItemComponent)(); };
DropdownItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownItemComponent, selectors: [["lib-dropdown-item"]], inputs: { image: "image", text: "text", route: "route", styles: "styles", items: "items" }, decls: 2, vars: 4, consts: [[1, "dropdown-button", 3, "routerLink"]], template: function DropdownItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.styles);
        i0.ɵɵpropertyInterpolate("routerLink", ctx.route);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.text);
    } }, directives: [i1.RouterLinkWithHref], styles: ["a[_ngcontent-%COMP%]{text-decoration:none}a[_ngcontent-%COMP%]:hover{color:red}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownItemComponent, [{
        type: Component,
        args: [{
                selector: 'lib-dropdown-item',
                templateUrl: './dropdown-item.component.html',
                styleUrls: ['./dropdown-item.component.scss']
            }]
    }], function () { return []; }, { image: [{
            type: Input
        }], text: [{
            type: Input
        }], route: [{
            type: Input
        }], styles: [{
            type: Input
        }], items: [{
            type: Input
        }] }); })();
;

class NavigationItemComponent {
    constructor() {
        this.image = '';
        this.text = '';
        this.route = '';
        this.styles = '';
    }
    ;
    ngOnInit() {
        console.log("Image Path: ", this.image);
    }
    ;
}
NavigationItemComponent.ɵfac = function NavigationItemComponent_Factory(t) { return new (t || NavigationItemComponent)(); };
NavigationItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavigationItemComponent, selectors: [["navigation-item"]], inputs: { image: "image", text: "text", route: "route", styles: "styles" }, decls: 2, vars: 4, consts: [[3, "routerLink"]], template: function NavigationItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.styles);
        i0.ɵɵpropertyInterpolate("routerLink", ctx.route);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.text);
    } }, directives: [i1.RouterLinkWithHref], styles: ["a[_ngcontent-%COMP%]{text-decoration:none}a[_ngcontent-%COMP%]:hover{color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationItemComponent, [{
        type: Component,
        args: [{
                selector: 'navigation-item',
                templateUrl: './navigation-item.component.html',
                styleUrls: ['./navigation-item.component.scss']
            }]
    }], function () { return []; }, { image: [{
            type: Input
        }], text: [{
            type: Input
        }], route: [{
            type: Input
        }], styles: [{
            type: Input
        }] }); })();
;

/* Angular Core Components */
function NavigationComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "lib-dropdown-item", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("image", item_r1.image)("text", item_r1.text)("route", item_r1.route)("styles", item_r1.styles);
} }
function NavigationComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "navigation-item", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("text", item_r1.text)("route", item_r1.route)("styles", item_r1.styles);
} }
function NavigationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NavigationComponent_ng_container_2_ng_container_1_Template, 2, 4, "ng-container", 2);
    i0.ɵɵtemplate(2, NavigationComponent_ng_container_2_ng_container_2_Template, 2, 3, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.isDropdown);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r1.isDropdown);
} }
class NavigationComponent {
    constructor(logger) {
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
    trackByFn(index, item) { return item.id; }
    ;
    ;
    ngOnInit() {
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
    }
    ;
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(i0.ɵɵdirectiveInject(i1$1.NGXLogger)); };
NavigationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavigationComponent, selectors: [["lib-navigation"]], inputs: { imgAlt: "imgAlt", imgClass: "imgClass", imgHeight: "imgHeight", imgSizes: "imgSizes", imgSrc: "imgSrc", imgSrcSet: "imgSrcSet", imgStyles: "imgStyles", imgUseMap: "imgUseMap", imgWidth: "imgWidth", containerStyles: "containerStyles", items: "items" }, decls: 3, vars: 14, consts: [[3, "alt", "height", "sizes", "src", "srcset", "styles", "usemap", "width"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "image", "text", "route", "styles"], [3, "text", "route", "styles"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section");
        i0.ɵɵelement(1, "lib-image", 0);
        i0.ɵɵtemplate(2, NavigationComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.containerStyles);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.imgClass);
        i0.ɵɵproperty("alt", ctx.imgAlt)("height", ctx.imgHeight)("sizes", ctx.imgSizes)("src", ctx.imgSrc)("srcset", ctx.imgSrcSet)("styles", ctx.imgStyles)("usemap", ctx.imgUseMap)("width", ctx.imgWidth);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [i2.ImageDisplayComponent, i3.NgForOf, i3.NgIf, DropdownItemComponent, NavigationItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationComponent, [{
        type: Component,
        args: [{
                selector: 'lib-navigation',
                templateUrl: './navigation.component.html'
            }]
    }], function () { return [{ type: i1$1.NGXLogger }]; }, { imgAlt: [{
            type: Input
        }], imgClass: [{
            type: Input
        }], imgHeight: [{
            type: Input
        }], imgSizes: [{
            type: Input
        }], imgSrc: [{
            type: Input
        }], imgSrcSet: [{
            type: Input
        }], imgStyles: [{
            type: Input
        }], imgUseMap: [{
            type: Input
        }], imgWidth: [{
            type: Input
        }], containerStyles: [{
            type: Input
        }], items: [{
            type: Input
        }] }); })();

class NavigationModule {
}
NavigationModule.ɵfac = function NavigationModule_Factory(t) { return new (t || NavigationModule)(); };
NavigationModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NavigationModule });
NavigationModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            RouterModule,
            ImageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NavigationComponent,
                    NavigationItemComponent,
                    DropdownItemComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    ImageModule
                ],
                exports: [NavigationComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NavigationModule, { declarations: [NavigationComponent,
        NavigationItemComponent,
        DropdownItemComponent], imports: [CommonModule,
        RouterModule,
        ImageModule], exports: [NavigationComponent] }); })();

;
// Initialize
// items: [{text: '', route: ''}], styles: {}};

/*
 * Public API Surface of test-scoped-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NavigationComponent, NavigationModule };
//# sourceMappingURL=crowsong-navigation.js.map
