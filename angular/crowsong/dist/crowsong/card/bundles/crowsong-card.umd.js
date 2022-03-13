(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ngx-logger')) :
    typeof define === 'function' && define.amd ? define('@crowsong/card', ['exports', '@angular/core', '@angular/common', 'ngx-logger'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.crowsong = global.crowsong || {}, global.crowsong.card = {}), global.ng.core, global.ng.common, global.i1));
}(this, (function (exports, i0, i2, i1) { 'use strict';

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
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    /* Angular Core Imports */
    function CardComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "p");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(item_r1);
        }
    }
    var CardComponent = /** @class */ (function () {
        function CardComponent(logger) {
            this.logger = logger;
            this.image = '';
            this.title = '';
            this.body = [];
            this.footer = '';
            this.cardStyles = '';
            this.titleStyles = '';
        }
        ;
        CardComponent.prototype.ngOnInit = function () {
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
        };
        ;
        return CardComponent;
    }());
    CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace.NGXLogger)); };
    CardComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CardComponent, selectors: [["lib-card"]], inputs: { image: "image", title: "title", body: "body", footer: "footer", cardStyles: "cardStyles", titleStyles: "titleStyles" }, decls: 6, vars: 7, consts: [[1, "card"], [4, "ngFor", "ngForOf"]], template: function CardComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "h1");
                i0__namespace.ɵɵtext(2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(3, CardComponent_ng_container_3_Template, 3, 1, "ng-container", 1);
                i0__namespace.ɵɵelementStart(4, "p");
                i0__namespace.ɵɵtext(5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleMap(ctx.cardStyles);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵstyleMap(ctx.titleStyles);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(ctx.title);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.body);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate(ctx.footer);
            }
        }, directives: [i2__namespace.NgForOf], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CardComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-card',
                        templateUrl: 'card.component.html'
                    }]
            }], function () { return [{ type: i1__namespace.NGXLogger }]; }, { image: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], body: [{
                    type: i0.Input
                }], footer: [{
                    type: i0.Input
                }], cardStyles: [{
                    type: i0.Input
                }], titleStyles: [{
                    type: i0.Input
                }] });
    })();
    ;

    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        return CardModule;
    }());
    CardModule.ɵfac = function CardModule_Factory(t) { return new (t || CardModule)(); };
    CardModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CardModule });
    CardModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CardModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CardComponent
                        ],
                        imports: [
                            i2.CommonModule
                        ],
                        exports: [CardComponent]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CardModule, { declarations: [CardComponent], imports: [i2.CommonModule], exports: [CardComponent] }); })();

    /*
     * Public API Surface of card
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CardComponent = CardComponent;
    exports.CardModule = CardModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=crowsong-card.umd.js.map
