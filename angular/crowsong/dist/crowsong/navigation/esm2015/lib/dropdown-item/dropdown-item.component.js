import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class DropdownItemComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jcm93c29uZy9uYXZpZ2F0aW9uL3NyYy9saWIvZHJvcGRvd24taXRlbS9kcm9wZG93bi1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Nyb3dzb25nL25hdmlnYXRpb24vc3JjL2xpYi9kcm9wZG93bi1pdGVtL2Ryb3Bkb3duLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8scUJBQXFCO0lBUWhDO1FBUFMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixVQUFLLEdBQWdCLEVBQUUsQ0FBQztJQUdqQixDQUFDO0lBRFYsU0FBUyxDQUFDLEtBQWEsRUFBRSxJQUFTLElBQUksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDN0MsQ0FBQztJQUVsQixRQUFRLEtBQVcsQ0FBQztJQUFBLENBQUM7OzBGQVZWLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDUGxDLDRCQUFtRTtRQUFBLFlBQVE7UUFBQSxpQkFBSTs7UUFBckQseUJBQWdCO1FBQXZDLGlEQUFzQjtRQUEwQyxlQUFRO1FBQVIsOEJBQVE7O3VGRE85RCxxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDO3NDQUVVLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSzs7QUFNUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi9pdGVtL2l0ZW0nO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1kcm9wZG93bi1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24taXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24taXRlbS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSByb3V0ZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc3R5bGVzOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpdGVtczogQXJyYXk8SXRlbT4gPSBbXTtcclxuICBcclxuICBwdWJsaWMgdHJhY2tCeUZuKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSkgeyByZXR1cm4gaXRlbS5pZCB9O1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9O1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHsgfTtcclxufTtcclxuIiwiPGEgcm91dGVyTGluaz1cInt7cm91dGV9fVwiIFtzdHlsZV09XCJzdHlsZXNcIiBjbGFzcz1cImRyb3Bkb3duLWJ1dHRvblwiPnt7dGV4dH19PC9hPlxyXG5cclxuPCEtLVxyXG48ZGl2IGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIFtzdHlsZV09XCJzdHlsZXNcIj5cclxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wZG93bi1idXR0b25cIj57e3RleHR9fTwvYT5cclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgdHJhY2tCeTogdHJhY2tCeUZuXCI+XHJcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XCJ7e2l0ZW0ucm91dGV9fVwiIFtzdHlsZV09XCJpdGVtLnN0eWxlc1wiPnt7aXRlbS50ZXh0fX08L2E+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbi0tPiJdfQ==