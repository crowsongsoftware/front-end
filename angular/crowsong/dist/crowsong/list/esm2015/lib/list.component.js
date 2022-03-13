import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-logger";
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
export class ListComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jcm93c29uZy9saXN0L3NyYy9saWIvbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jcm93c29uZy9saXN0L3NyYy9saWIvbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztJQ0F6RCw2QkFBNEQ7SUFDeEQsMkJBQXNCO0lBQUEsb0JBQUk7SUFBQSxpQkFBTTtJQUNwQywwQkFBZTs7O0lBRE4sZUFBZ0I7SUFBaEIsNEJBQWdCOztBRFF6QixNQUFNLE9BQU8sYUFBYTtJQU14QixZQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBTDVCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQUlXLENBQUM7SUFGbEMsU0FBUyxDQUFDLEtBQWEsRUFBRSxJQUFTLElBQUksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQztJQUFBLENBQUM7SUFFckIsQ0FBQztJQUUxQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFBQSxDQUFDOzswRUFkUyxhQUFhO2dFQUFiLGFBQWE7UUNUMUIsZ0ZBRWU7O1FBRmdCLGtDQUFTLCtCQUFBOzt1RkRTM0IsYUFBYTtjQUp6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBQyx1QkFBdUI7YUFDcEM7NERBRVUsSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLOztBQWFQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qIE5HWCBMb2dnZXIgKi9cclxuaW1wb3J0IHsgTkdYTG9nZ2VyfSBmcm9tICduZ3gtbG9nZ2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOicuL2xpc3QuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gIEBJbnB1dCgpIGxpc3Q6IEFycmF5PGFueT4gPSBbXTtcclxuICBASW5wdXQoKSBzdHlsZXM6IHN0cmluZyA9ICcnO1xyXG5cclxuICBwdWJsaWMgdHJhY2tCeUZuKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSkgeyByZXR1cm4gaXRlbS5pZCB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTkdYTG9nZ2VyKSB7fTtcclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCctLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCctIEBjcm93c29uZy9saXN0IC0nKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCctLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdsaXN0OiAnLCB0aGlzLmxpc3QpO1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ3N0eWxlcycsIHRoaXMuc3R5bGVzKTtcclxuICB9O1xyXG59O1xyXG4iLCI8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3Q7IHRyYWNrQnk6IHRyYWNrQnlGblwiPlxyXG4gICAgPGRpdiBbc3R5bGVdPVwic3R5bGVzXCI+aXRlbTwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj4iXX0=