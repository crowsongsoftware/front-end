/* Angular Imports */
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-logger";
export class TitleComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY3Jvd3NvbmcvdGl0bGUvc3JjL2xpYi90aXRsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jcm93c29uZy90aXRsZS9zcmMvbGliL3RpdGxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQjtBQUNyQixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBU3pELE1BQU0sT0FBTyxjQUFjO0lBSXpCLFlBQW9CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFINUIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQVcsRUFBRSxDQUFDO0lBRVksQ0FBQztJQUFBLENBQUM7SUFFM0MsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFBQSxDQUFDOzs0RUFiUyxjQUFjO2lFQUFkLGNBQWM7UUNWM0IsK0JBQVM7UUFDTCwyQkFBc0I7UUFBQSxZQUFTO1FBQUEsaUJBQU07UUFDekMsaUJBQVU7O1FBREQsZUFBZ0I7UUFBaEIseUJBQWdCO1FBQUMsZUFBUztRQUFULCtCQUFTOzt1RkRTdEIsY0FBYztjQUoxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7YUFDdEM7NERBRVUsS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogQW5ndWxhciBJbXBvcnRzICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyogTkdYIExvZ2dlciAqL1xyXG5pbXBvcnQgeyBOR1hMb2dnZXJ9IGZyb20gJ25neC1sb2dnZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItdGl0bGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aXRsZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc3R5bGVzOiBzdHJpbmcgPSAnJztcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTkdYTG9nZ2VyKSB7IH07XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQgeyBcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCctLSBAY3Jvd3NvbmcvdGl0bGUgLS0nKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCcgLSBUaXRsZUNvbXBvbmVudCAtJyk7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygndGl0bGU6ICcsIHRoaXMudGl0bGUpO1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ3N0eWxlcycsIHRoaXMuc3R5bGVzKTtcclxuICB9O1xyXG59XHJcbiIsIjxzZWN0aW9uPlxyXG4gICAgPGRpdiBbc3R5bGVdPVwic3R5bGVzXCI+e3t0aXRsZX19PC9kaXY+XHJcbjwvc2VjdGlvbj4iXX0=