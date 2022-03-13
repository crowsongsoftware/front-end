import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from 'ngx-logger';
import { CommonModule } from '@angular/common';

/* Angular Imports */
class TitleComponent {
    constructor(logger) {
        this.logger = logger;
        this.title = '';
        this.styles = '';
    }
    ;
    ngOnInit() {
        this.logger.debug('---------------------');
        this.logger.debug('-- @crowsong/title --');
        this.logger.debug('---------------------');
        this.logger.debug(' - TitleComponent -');
        this.logger.debug('title: ', this.title);
        this.logger.debug('styles', this.styles);
    }
    ;
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(i0.ɵɵdirectiveInject(i1.NGXLogger)); };
TitleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TitleComponent, selectors: [["lib-title"]], inputs: { title: "title", styles: "styles" }, decls: 3, vars: 3, template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section");
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵstyleMap(ctx.styles);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.title);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TitleComponent, [{
        type: Component,
        args: [{
                selector: 'lib-title',
                templateUrl: './title.component.html'
            }]
    }], function () { return [{ type: i1.NGXLogger }]; }, { title: [{
            type: Input
        }], styles: [{
            type: Input
        }] }); })();

class TitleModule {
}
TitleModule.ɵfac = function TitleModule_Factory(t) { return new (t || TitleModule)(); };
TitleModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TitleModule });
TitleModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TitleModule, [{
        type: NgModule,
        args: [{
                declarations: [TitleComponent],
                imports: [CommonModule],
                exports: [TitleComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TitleModule, { declarations: [TitleComponent], imports: [CommonModule], exports: [TitleComponent] }); })();

/*
 * Public API Surface of title
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TitleComponent, TitleModule };
//# sourceMappingURL=crowsong-title.js.map
