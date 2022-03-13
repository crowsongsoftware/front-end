import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from 'ngx-logger';

function ListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2, "item");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(ctx_r0.styles);
} }
class ListComponent {
    constructor(logger) {
        this.logger = logger;
        this.list = [];
        this.styles = '';
    }
    trackByFn(index, item) { return item.id; }
    ;
    ;
    ngOnInit() {
        this.logger.debug('------------------');
        this.logger.debug('- @crowsong/list -');
        this.logger.debug('------------------');
        this.logger.debug('list: ', this.list);
        this.logger.debug('styles', this.styles);
    }
    ;
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0.ɵɵdirectiveInject(i1.NGXLogger)); };
ListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["lib-list"]], inputs: { list: "list", styles: "styles" }, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ListComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.list)("ngForTrackBy", ctx.trackByFn);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-list',
                templateUrl: './list.component.html'
            }]
    }], function () { return [{ type: i1.NGXLogger }]; }, { list: [{
            type: Input
        }], styles: [{
            type: Input
        }] }); })();
;

class ListModule {
}
ListModule.ɵfac = function ListModule_Factory(t) { return new (t || ListModule)(); };
ListModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ListModule });
ListModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ListComponent
                ],
                imports: [],
                exports: [
                    ListComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ListModule, { declarations: [ListComponent], exports: [ListComponent] }); })();

/*
 * Public API Surface of list
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ListComponent, ListModule };
//# sourceMappingURL=crowsong-list.js.map
