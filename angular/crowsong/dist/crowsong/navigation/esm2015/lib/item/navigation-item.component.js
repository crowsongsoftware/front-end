import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class NavigationItemComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Nyb3dzb25nL25hdmlnYXRpb24vc3JjL2xpYi9pdGVtL25hdmlnYXRpb24taXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jcm93c29uZy9uYXZpZ2F0aW9uL3NyYy9saWIvaXRlbS9uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sdUJBQXVCO0lBTWhDO1FBTFMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQUVkLENBQUM7SUFBQSxDQUFDO0lBRWpCLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUFBLENBQUM7OzhGQVZNLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDUHBDLDRCQUE0QztRQUFBLFlBQVE7UUFBQSxpQkFBSTs7UUFBN0IseUJBQWdCO1FBQXZDLGlEQUFzQjtRQUFrQixlQUFRO1FBQVIsOEJBQVE7O3VGRE92Qyx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEO3NDQUVZLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSzs7QUFPVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25hdmlnYXRpb24taXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmlnYXRpb24taXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmF2aWdhdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGltYWdlOiBzdHJpbmcgPSAnJztcclxuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgQElucHV0KCkgcm91dGU6IHN0cmluZyA9ICcnO1xyXG4gICAgQElucHV0KCkgc3R5bGVzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9O1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkltYWdlIFBhdGg6IFwiLCB0aGlzLmltYWdlKTtcclxuICAgICB9O1xyXG59O1xyXG4iLCI8YSAgcm91dGVyTGluaz1cInt7cm91dGV9fVwiIFtzdHlsZV09XCJzdHlsZXNcIj57e3RleHR9fTwvYT4iXX0=