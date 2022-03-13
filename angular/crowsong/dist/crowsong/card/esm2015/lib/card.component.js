/* Angular Core Imports */
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-logger";
import * as i2 from "@angular/common";
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
export class CardComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jcm93c29uZy9jYXJkL3NyYy9saWIvY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jcm93c29uZy9jYXJkL3NyYy9saWIvY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUFDMUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQ3JELDZCQUF3QztJQUNwQyx5QkFBRztJQUFBLFlBQVE7SUFBQSxpQkFBSTtJQUNuQiwwQkFBZTs7O0lBRFIsZUFBUTtJQUFSLDZCQUFROztBRE9uQixNQUFNLE9BQU8sYUFBYTtJQVF4QixZQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBUDVCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQWtCLEVBQUUsQ0FBQztRQUN6QixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFFTyxDQUFDO0lBQUEsQ0FBQztJQUUzQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFBQSxDQUFDOzswRUFyQlMsYUFBYTtnRUFBYixhQUFhO1FDVjFCLDhCQUF5QztRQUNyQywwQkFBMEI7UUFBQSxZQUFTO1FBQUEsaUJBQUs7UUFDeEMsZ0ZBRWU7UUFDZix5QkFBRztRQUFBLFlBQVU7UUFBQSxpQkFBSTtRQUNyQixpQkFBTTs7UUFOWSw2QkFBc0I7UUFDaEMsZUFBcUI7UUFBckIsOEJBQXFCO1FBQUMsZUFBUztRQUFULCtCQUFTO1FBQ0osZUFBTztRQUFQLGtDQUFPO1FBR25DLGVBQVU7UUFBVixnQ0FBVTs7dUZES0osYUFBYTtjQUp6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSxxQkFBcUI7YUFDbkM7NERBRVUsS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7O0FBZ0JQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBbmd1bGFyIENvcmUgSW1wb3J0cyAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qIE5HWCBMb2dnZXIgKi9cclxuaW1wb3J0IHsgTkdYTG9nZ2VyfSBmcm9tICduZ3gtbG9nZ2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBib2R5OiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjYXJkU3R5bGVzOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0aXRsZVN0eWxlczogc3RyaW5nID0gJyc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IE5HWExvZ2dlcikgeyB9O1xyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJy0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnLS0gQGNyb3dzb25nL2NhcmQgLS0nKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCcgLUNhcmRDb21wb25lbnQtJyk7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdpbWFnZTogJywgdGhpcy5pbWFnZSk7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygndGl0bGU6ICcsIHRoaXMudGl0bGUpO1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ2JvZHk6ICcsIHRoaXMuYm9keSk7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnZm9vdGVyOiAnLCB0aGlzLmZvb3Rlcik7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnY2FyZFN0eWxlcycpO1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ3RpdGxlU3R5bGVzJyk7XHJcbiAgfTtcclxufTtcclxuIiwiPGRpdiBjbGFzcz0nY2FyZCcgW3N0eWxlXSA9ICdjYXJkU3R5bGVzJz5cclxuICAgIDxoMSBbc3R5bGVdPSd0aXRsZVN0eWxlcyc+e3t0aXRsZX19PC9oMT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPSdsZXQgaXRlbSBvZiBib2R5Jz5cclxuICAgICAgICA8cD57e2l0ZW19fTwvcD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPHA+e3tmb290ZXJ9fTwvcD5cclxuPC9kaXY+Il19