/* Angular Core Components */
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-logger";
import * as i2 from "@crowsong/image";
import * as i3 from "@angular/common";
import * as i4 from "./dropdown-item/dropdown-item.component";
import * as i5 from "./item/navigation-item.component";
function NavigationComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "lib-dropdown-item", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("image", item_r1.image)("text", item_r1.text)("route", item_r1.route)("styles", item_r1.styles);
} }
function NavigationComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "navigation-item", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("text", item_r1.text)("route", item_r1.route)("styles", item_r1.styles);
} }
function NavigationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NavigationComponent_ng_container_2_ng_container_1_Template, 2, 4, "ng-container", 2);
    i0.ɵɵtemplate(2, NavigationComponent_ng_container_2_ng_container_2_Template, 2, 3, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.isDropdown);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r1.isDropdown);
} }
export class NavigationComponent {
    constructor(logger) {
        this.logger = logger;
        /* Input Properties for Image Library */
        this.imgAlt = '';
        this.imgClass = '';
        this.imgHeight = '';
        this.imgSizes = '';
        this.imgSrc = '';
        this.imgSrcSet = '';
        this.imgStyles = '';
        this.imgUseMap = '';
        this.imgWidth = '';
        /* Input Properties for Navigation Library */
        this.containerStyles = '';
        this.items = [];
    }
    trackByFn(index, item) { return item.id; }
    ;
    ;
    ngOnInit() {
        this.logger.debug('--------------------');
        this.logger.debug('@crowsong/navigation');
        this.logger.debug('--------------------');
        this.logger.debug("- Image Properties -");
        this.logger.debug("Image Alt: ", this.imgAlt);
        this.logger.debug("Image Class: ", this.imgClass);
        this.logger.debug("Image Height: ", this.imgHeight);
        this.logger.debug("Image Width: ", this.imgWidth);
        this.logger.debug('Image Sizes: ', this.imgSizes);
        this.logger.debug('Image Src: ', this.imgSrc);
        this.logger.debug('Image Src Set: ', this.imgSrcSet);
        this.logger.debug("Image Styles: ", this.imgStyles);
        this.logger.debug("Image Use Map: ", this.imgUseMap);
        this.logger.debug("- Navigation Properties -");
        this.logger.debug('Items: ', this.items);
        this.logger.debug('Container Styles: ', this.containerStyles);
    }
    ;
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(i0.ɵɵdirectiveInject(i1.NGXLogger)); };
NavigationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavigationComponent, selectors: [["lib-navigation"]], inputs: { imgAlt: "imgAlt", imgClass: "imgClass", imgHeight: "imgHeight", imgSizes: "imgSizes", imgSrc: "imgSrc", imgSrcSet: "imgSrcSet", imgStyles: "imgStyles", imgUseMap: "imgUseMap", imgWidth: "imgWidth", containerStyles: "containerStyles", items: "items" }, decls: 3, vars: 14, consts: [[3, "alt", "height", "sizes", "src", "srcset", "styles", "usemap", "width"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "image", "text", "route", "styles"], [3, "text", "route", "styles"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section");
        i0.ɵɵelement(1, "lib-image", 0);
        i0.ɵɵtemplate(2, NavigationComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.containerStyles);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.imgClass);
        i0.ɵɵproperty("alt", ctx.imgAlt)("height", ctx.imgHeight)("sizes", ctx.imgSizes)("src", ctx.imgSrc)("srcset", ctx.imgSrcSet)("styles", ctx.imgStyles)("usemap", ctx.imgUseMap)("width", ctx.imgWidth);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [i2.ImageDisplayComponent, i3.NgForOf, i3.NgIf, i4.DropdownItemComponent, i5.NavigationItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationComponent, [{
        type: Component,
        args: [{
                selector: 'lib-navigation',
                templateUrl: './navigation.component.html'
            }]
    }], function () { return [{ type: i1.NGXLogger }]; }, { imgAlt: [{
            type: Input
        }], imgClass: [{
            type: Input
        }], imgHeight: [{
            type: Input
        }], imgSizes: [{
            type: Input
        }], imgSrc: [{
            type: Input
        }], imgSrcSet: [{
            type: Input
        }], imgStyles: [{
            type: Input
        }], imgUseMap: [{
            type: Input
        }], imgWidth: [{
            type: Input
        }], containerStyles: [{
            type: Input
        }], items: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jcm93c29uZy9uYXZpZ2F0aW9uL3NyYy9saWIvbmF2aWdhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jcm93c29uZy9uYXZpZ2F0aW9uL3NyYy9saWIvbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDZWpELDZCQUFzQztJQUNsQyx1Q0FLb0I7SUFDeEIsMEJBQWU7OztJQUxQLGVBQW9CO0lBQXBCLHFDQUFvQixzQkFBQSx3QkFBQSwwQkFBQTs7O0lBTTVCLDZCQUF1QztJQUNuQyxxQ0FJa0I7SUFDdEIsMEJBQWU7OztJQUpQLGVBQWtCO0lBQWxCLG1DQUFrQix3QkFBQSwwQkFBQTs7O0lBWDlCLDZCQUE2RDtJQUN6RCxxR0FPZTtJQUNmLHFHQU1lO0lBQ25CLDBCQUFlOzs7SUFmSSxlQUFxQjtJQUFyQix5Q0FBcUI7SUFRckIsZUFBc0I7SUFBdEIsMENBQXNCOztBRFg3QyxNQUFNLE9BQU8sbUJBQW1CO0lBa0I5QixZQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBakJyQyx3Q0FBd0M7UUFDL0IsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUUvQiw2Q0FBNkM7UUFDcEMsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsVUFBSyxHQUFnQixFQUFFLENBQUM7SUFJUSxDQUFDO0lBRm5DLFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBRXBCLENBQUM7SUFFM0MsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFBQSxDQUFDOztzRkFyQ1MsbUJBQW1CO3NFQUFuQixtQkFBbUI7UUNiaEMsK0JBQW1DO1FBRS9CLCtCQVVZO1FBR1osc0ZBZ0JlO1FBQ25CLGlCQUFVOztRQWhDRCxrQ0FBeUI7UUFJMUIsZUFBa0I7UUFBbEIsMkJBQWtCO1FBRGxCLGdDQUFjLHlCQUFBLHVCQUFBLG1CQUFBLHlCQUFBLHlCQUFBLHlCQUFBLHVCQUFBO1FBWWEsZUFBVTtRQUFWLG1DQUFVLCtCQUFBOzt1RkRGaEMsbUJBQW1CO2NBSi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsNkJBQTZCO2FBQzNDOzREQUdVLE1BQU07a0JBQWQsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFHRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogQW5ndWxhciBDb3JlIENvbXBvbmVudHMgKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKiBOR1ggTG9nZ2VyICovXHJcbmltcG9ydCB7IE5HWExvZ2dlcn0gZnJvbSAnbmd4LWxvZ2dlcic7XHJcblxyXG4vKiBUeXBlcyAqL1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9pdGVtL2l0ZW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItbmF2aWdhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKiBJbnB1dCBQcm9wZXJ0aWVzIGZvciBJbWFnZSBMaWJyYXJ5ICovXHJcbiAgQElucHV0KCkgaW1nQWx0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpbWdDbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgpIGltZ0hlaWdodDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaW1nU2l6ZXM6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGltZ1NyYzogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaW1nU3JjU2V0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBpbWdTdHlsZXM6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGltZ1VzZU1hcDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaW1nV2lkdGg6IHN0cmluZyA9ICcnO1xyXG5cclxuICAvKiBJbnB1dCBQcm9wZXJ0aWVzIGZvciBOYXZpZ2F0aW9uIExpYnJhcnkgKi9cclxuICBASW5wdXQoKSBjb250YWluZXJTdHlsZXM6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBBcnJheTxJdGVtPiA9IFtdO1xyXG5cclxuICBwdWJsaWMgdHJhY2tCeUZuKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSkgeyByZXR1cm4gaXRlbS5pZCB9O1xyXG4gICAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IE5HWExvZ2dlciApIHt9O1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCctLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ0Bjcm93c29uZy9uYXZpZ2F0aW9uJyk7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiLSBJbWFnZSBQcm9wZXJ0aWVzIC1cIik7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIkltYWdlIEFsdDogXCIsIHRoaXMuaW1nQWx0KTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiSW1hZ2UgQ2xhc3M6IFwiLCB0aGlzLmltZ0NsYXNzKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiSW1hZ2UgSGVpZ2h0OiBcIiwgdGhpcy5pbWdIZWlnaHQpO1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoXCJJbWFnZSBXaWR0aDogXCIsIHRoaXMuaW1nV2lkdGgpO1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ0ltYWdlIFNpemVzOiAnLCB0aGlzLmltZ1NpemVzKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdJbWFnZSBTcmM6ICcsIHRoaXMuaW1nU3JjKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdJbWFnZSBTcmMgU2V0OiAnLCB0aGlzLmltZ1NyY1NldCk7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIkltYWdlIFN0eWxlczogXCIsIHRoaXMuaW1nU3R5bGVzKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiSW1hZ2UgVXNlIE1hcDogXCIsIHRoaXMuaW1nVXNlTWFwKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiLSBOYXZpZ2F0aW9uIFByb3BlcnRpZXMgLVwiKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdJdGVtczogJywgdGhpcy5pdGVtcyk7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnQ29udGFpbmVyIFN0eWxlczogJywgdGhpcy5jb250YWluZXJTdHlsZXMpO1xyXG4gIH07XHJcbn1cclxuIiwiPHNlY3Rpb24gW3N0eWxlXT1cImNvbnRhaW5lclN0eWxlc1wiPlxyXG4gICAgPCEtLSBOYXZpZ2F0aW9uIEltYWdlIChvcHRpb25hbCkgLS0+XHJcbiAgICA8bGliLWltYWdlXHJcbiAgICAgICAgW2FsdF09XCJpbWdBbHRcIlxyXG4gICAgICAgIFtjbGFzc109XCJpbWdDbGFzc1wiXHJcbiAgICAgICAgW2hlaWdodF09XCJpbWdIZWlnaHRcIlxyXG4gICAgICAgIFtzaXplc109XCJpbWdTaXplc1wiXHJcbiAgICAgICAgW3NyY109XCJpbWdTcmNcIlxyXG4gICAgICAgIFtzcmNzZXRdPVwiaW1nU3JjU2V0XCJcclxuICAgICAgICBbc3R5bGVzXT1cImltZ1N0eWxlc1wiXHJcbiAgICAgICAgW3VzZW1hcF09XCJpbWdVc2VNYXBcIlxyXG4gICAgICAgIFt3aWR0aF09XCJpbWdXaWR0aFwiPlxyXG4gICAgPC9saWItaW1hZ2U+XHJcblxyXG4gICAgPCEtLSBOYXZpZ2F0aW9uIEl0ZW1zIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgdHJhY2tCeTogdHJhY2tCeUZuXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0uaXNEcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8bGliLWRyb3Bkb3duLWl0ZW1cclxuICAgICAgICAgICAgICAgIFtpbWFnZV09XCJpdGVtLmltYWdlXCJcclxuICAgICAgICAgICAgICAgIFt0ZXh0XT1cIml0ZW0udGV4dFwiXHJcbiAgICAgICAgICAgICAgICBbcm91dGVdPVwiaXRlbS5yb3V0ZVwiXHJcbiAgICAgICAgICAgICAgICBbc3R5bGVzXT1cIml0ZW0uc3R5bGVzXCI+XHJcbiAgICAgICAgICAgIDwvbGliLWRyb3Bkb3duLWl0ZW0+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLmlzRHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPG5hdmlnYXRpb24taXRlbVxyXG4gICAgICAgICAgICAgICAgW3RleHRdPVwiaXRlbS50ZXh0XCJcclxuICAgICAgICAgICAgICAgIFtyb3V0ZV09XCJpdGVtLnJvdXRlXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZXNdPVwiaXRlbS5zdHlsZXNcIj5cclxuICAgICAgICAgICAgPC9uYXZpZ2F0aW9uLWl0ZW0+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+ICAgICAgICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L3NlY3Rpb24+Il19