(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-logger'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@crowsong/title', ['exports', '@angular/core', 'ngx-logger', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.crowsong = global.crowsong || {}, global.crowsong.title = {}), global.ng.core, global.i1, global.ng.common));
}(this, (function (exports, i0, i1, common) { 'use strict';

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

    /* Angular Imports */
    var TitleComponent = /** @class */ (function () {
        function TitleComponent(logger) {
            this.logger = logger;
            this.title = '';
            this.styles = '';
        }
        ;
        TitleComponent.prototype.ngOnInit = function () {
            this.logger.debug('---------------------');
            this.logger.debug('-- @crowsong/title --');
            this.logger.debug('---------------------');
            this.logger.debug(' - TitleComponent -');
            this.logger.debug('title: ', this.title);
            this.logger.debug('styles', this.styles);
        };
        ;
        return TitleComponent;
    }());
    TitleComponent.??fac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(i0__namespace.????directiveInject(i1__namespace.NGXLogger)); };
    TitleComponent.??cmp = /*@__PURE__*/ i0__namespace.????defineComponent({ type: TitleComponent, selectors: [["lib-title"]], inputs: { title: "title", styles: "styles" }, decls: 3, vars: 3, template: function TitleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.????elementStart(0, "section");
                i0__namespace.????elementStart(1, "div");
                i0__namespace.????text(2);
                i0__namespace.????elementEnd();
                i0__namespace.????elementEnd();
            }
            if (rf & 2) {
                i0__namespace.????advance(1);
                i0__namespace.????styleMap(ctx.styles);
                i0__namespace.????advance(1);
                i0__namespace.????textInterpolate(ctx.title);
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.??setClassMetadata(TitleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-title',
                        templateUrl: './title.component.html'
                    }]
            }], function () { return [{ type: i1__namespace.NGXLogger }]; }, { title: [{
                    type: i0.Input
                }], styles: [{
                    type: i0.Input
                }] });
    })();

    var TitleModule = /** @class */ (function () {
        function TitleModule() {
        }
        return TitleModule;
    }());
    TitleModule.??fac = function TitleModule_Factory(t) { return new (t || TitleModule)(); };
    TitleModule.??mod = /*@__PURE__*/ i0__namespace.????defineNgModule({ type: TitleModule });
    TitleModule.??inj = /*@__PURE__*/ i0__namespace.????defineInjector({ imports: [[common.CommonModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.??setClassMetadata(TitleModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [TitleComponent],
                        imports: [common.CommonModule],
                        exports: [TitleComponent]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.????setNgModuleScope(TitleModule, { declarations: [TitleComponent], imports: [common.CommonModule], exports: [TitleComponent] }); })();

    /*
     * Public API Surface of title
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TitleComponent = TitleComponent;
    exports.TitleModule = TitleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=crowsong-title.umd.js.map
