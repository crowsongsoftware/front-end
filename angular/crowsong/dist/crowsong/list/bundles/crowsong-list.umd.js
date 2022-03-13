(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-logger')) :
    typeof define === 'function' && define.amd ? define('@crowsong/list', ['exports', '@angular/core', 'ngx-logger'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.crowsong = global.crowsong || {}, global.crowsong.list = {}), global.ng.core, global.i1));
}(this, (function (exports, i0, i1) { 'use strict';

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

    function ListComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "div");
            i0__namespace.ɵɵtext(2, "item");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵstyleMap(ctx_r0.styles);
        }
    }
    var ListComponent = /** @class */ (function () {
        function ListComponent(logger) {
            this.logger = logger;
            this.list = [];
            this.styles = '';
        }
        ListComponent.prototype.trackByFn = function (index, item) { return item.id; };
        ;
        ;
        ListComponent.prototype.ngOnInit = function () {
            this.logger.debug('------------------');
            this.logger.debug('- @crowsong/list -');
            this.logger.debug('------------------');
            this.logger.debug('list: ', this.list);
            this.logger.debug('styles', this.styles);
        };
        ;
        return ListComponent;
    }());
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace.NGXLogger)); };
    ListComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ListComponent, selectors: [["lib-list"]], inputs: { list: "list", styles: "styles" }, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"]], template: function ListComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ListComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngForOf", ctx.list)("ngForTrackBy", ctx.trackByFn);
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ListComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-list',
                        templateUrl: './list.component.html'
                    }]
            }], function () { return [{ type: i1__namespace.NGXLogger }]; }, { list: [{
                    type: i0.Input
                }], styles: [{
                    type: i0.Input
                }] });
    })();
    ;

    var ListModule = /** @class */ (function () {
        function ListModule() {
        }
        return ListModule;
    }());
    ListModule.ɵfac = function ListModule_Factory(t) { return new (t || ListModule)(); };
    ListModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ListModule });
    ListModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ListModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ListComponent
                        ],
                        imports: [],
                        exports: [
                            ListComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ListModule, { declarations: [ListComponent], exports: [ListComponent] }); })();

    /*
     * Public API Surface of list
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ListComponent = ListComponent;
    exports.ListModule = ListModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=crowsong-list.umd.js.map
