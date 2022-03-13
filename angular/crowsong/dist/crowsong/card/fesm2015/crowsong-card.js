import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from 'ngx-logger';

/* Angular Core Imports */
function CardComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1);
} }
class CardComponent {
    constructor(logger) {
        this.logger = logger;
        this.image = '';
        this.title = '';
        this.body = [];
        this.footer = '';
        this.cardStyles = '';
        this.titleStyles = '';
    }
    ;
    ngOnInit() {
        this.logger.debug('--------------------');
        this.logger.debug('-- @crowsong/card --');
        this.logger.debug(' -CardComponent-');
        this.logger.debug('--------------------');
        this.logger.debug('image: ', this.image);
        this.logger.debug('title: ', this.title);
        this.logger.debug('body: ', this.body);
        this.logger.debug('footer: ', this.footer);
        this.logger.debug('cardStyles');
        this.logger.debug('titleStyles');
    }
    ;
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(i0.ɵɵdirectiveInject(i1.NGXLogger)); };
CardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardComponent, selectors: [["lib-card"]], inputs: { image: "image", title: "title", body: "body", footer: "footer", cardStyles: "cardStyles", titleStyles: "titleStyles" }, decls: 6, vars: 7, consts: [[1, "card"], [4, "ngFor", "ngForOf"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h1");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CardComponent_ng_container_3_Template, 3, 1, "ng-container", 1);
        i0.ɵɵelementStart(4, "p");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.cardStyles);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleMap(ctx.titleStyles);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.body);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.footer);
    } }, directives: [i2.NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card',
                templateUrl: 'card.component.html'
            }]
    }], function () { return [{ type: i1.NGXLogger }]; }, { image: [{
            type: Input
        }], title: [{
            type: Input
        }], body: [{
            type: Input
        }], footer: [{
            type: Input
        }], cardStyles: [{
            type: Input
        }], titleStyles: [{
            type: Input
        }] }); })();
;

class CardModule {
}
CardModule.ɵfac = function CardModule_Factory(t) { return new (t || CardModule)(); };
CardModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CardModule });
CardModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    CardComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [CardComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CardModule, { declarations: [CardComponent], imports: [CommonModule], exports: [CardComponent] }); })();

/*
 * Public API Surface of card
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardComponent, CardModule };
//# sourceMappingURL=crowsong-card.js.map
