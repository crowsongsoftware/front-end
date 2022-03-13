import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-logger";
import * as i2 from "@angular/common";
export class ImageDisplayComponent {
    constructor(logger) {
        this.logger = logger;
        /* Image Attributes */
        this.alt = '';
        this.sizes = '';
        this.srcset = '';
        this.usemap = '';
        /* Angular Bindings */
        this.src = '';
        this.class = '';
        this.styles = '';
        /* Image Width */
        this.width = '';
        this.maxWidth = '100%';
        /* Image Height */
        this.height = 'auto';
        this.maxHeight = '';
    }
    ;
    ngOnInit() {
        this.logger.debug('-------------------------');
        this.logger.debug('- @crowsong/image -');
        this.logger.debug('- ImageDisplayComponent -');
        this.logger.debug('-------------------------');
        this.logger.debug('- Image Properties -');
        this.logger.debug('alt: ', this.alt);
        this.logger.debug('sizes: ', this.sizes);
        this.logger.debug('srcset: ', this.srcset);
        this.logger.debug('usemap: ', this.usemap);
        this.logger.debug('height: ', this.height);
        this.logger.debug('maxHeight: ', this.maxHeight);
        this.logger.debug('width: ', this.width);
        this.logger.debug('maxWidth: ', this.maxWidth);
        this.logger.debug('- Image Style Properties -');
        this.logger.debug('class: ', this.class);
        this.logger.debug('styles: ', this.styles);
    }
    ;
}
ImageDisplayComponent.ɵfac = function ImageDisplayComponent_Factory(t) { return new (t || ImageDisplayComponent)(i0.ɵɵdirectiveInject(i1.NGXLogger)); };
ImageDisplayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImageDisplayComponent, selectors: [["lib-image"]], inputs: { alt: "alt", sizes: "sizes", srcset: "srcset", usemap: "usemap", src: "src", class: "class", styles: "styles", width: "width", maxWidth: "maxWidth", height: "height", maxHeight: "maxHeight" }, decls: 1, vars: 8, consts: [[3, "ngClass", "src"]], template: function ImageDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "img", 0);
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.styles);
        i0.ɵɵstyleProp("max-width", ctx.maxWidth)("height", ctx.maxHeight);
        i0.ɵɵproperty("ngClass", ctx.class)("src", ctx.src, i0.ɵɵsanitizeUrl);
    } }, directives: [i2.NgClass], styles: [".responsive-scale-both[_ngcontent-%COMP%]{width:100%;height:auto}.responsive-scale-down[_ngcontent-%COMP%]{max-width:100%;height:auto}.responsive-max-size[_ngcontent-%COMP%]{width:100%;max-width:400px;height:auto}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageDisplayComponent, [{
        type: Component,
        args: [{
                selector: 'lib-image',
                templateUrl: './image-display.component.html',
                styleUrls: ['./image-display.component.scss']
            }]
    }], function () { return [{ type: i1.NGXLogger }]; }, { alt: [{
            type: Input
        }], sizes: [{
            type: Input
        }], srcset: [{
            type: Input
        }], usemap: [{
            type: Input
        }], src: [{
            type: Input
        }], class: [{
            type: Input
        }], styles: [{
            type: Input
        }], width: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], height: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jcm93c29uZy9pbWFnZS9zcmMvbGliL2Rpc3BsYXkvaW1hZ2UtZGlzcGxheS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jcm93c29uZy9pbWFnZS9zcmMvbGliL2Rpc3BsYXkvaW1hZ2UtZGlzcGxheS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQVV6RCxNQUFNLE9BQU8scUJBQXFCO0lBb0JoQyxZQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBbkJyQyxzQkFBc0I7UUFDYixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBRTdCLHNCQUFzQjtRQUNiLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBRTdCLGlCQUFpQjtRQUNSLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsYUFBUSxHQUFXLE1BQU0sQ0FBQztRQUVuQyxrQkFBa0I7UUFDVCxXQUFNLEdBQVcsTUFBTSxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxFQUFFLENBQUM7SUFFUSxDQUFDO0lBQUEsQ0FBQztJQUUxQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQUEsQ0FBQzs7MEZBdkNTLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDVmxDLHlCQUs0Qjs7UUFKNUIseUJBQWdCO1FBR2hCLHlDQUE0Qix5QkFBQTtRQUY1QixtQ0FBaUIsa0NBQUE7O3VGRFFKLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDOzREQUdVLEdBQUc7a0JBQVgsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUdHLEdBQUc7a0JBQVgsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUdHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFHRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKiBOR1ggTG9nZ2VyICovXHJcbmltcG9ydCB7IE5HWExvZ2dlcn0gZnJvbSAnbmd4LWxvZ2dlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1pbWFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VEaXNwbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKiBJbWFnZSBBdHRyaWJ1dGVzICovXHJcbiAgQElucHV0KCkgYWx0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBzaXplczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc3Jjc2V0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB1c2VtYXA6IHN0cmluZyA9ICcnO1xyXG4gIFxyXG4gIC8qIEFuZ3VsYXIgQmluZGluZ3MgKi9cclxuICBASW5wdXQoKSBzcmM6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBzdHlsZXM6IHN0cmluZyA9ICcnO1xyXG4gIFxyXG4gIC8qIEltYWdlIFdpZHRoICovXHJcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIG1heFdpZHRoOiBzdHJpbmcgPSAnMTAwJSc7XHJcblxyXG4gIC8qIEltYWdlIEhlaWdodCAqL1xyXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nID0gJ2F1dG8nO1xyXG4gIEBJbnB1dCgpIG1heEhlaWdodDogc3RyaW5nID0gJyc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IE5HWExvZ2dlcikge307XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCctIEBjcm93c29uZy9pbWFnZSAtJyk7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnLSBJbWFnZURpc3BsYXlDb21wb25lbnQgLScpO1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCctIEltYWdlIFByb3BlcnRpZXMgLScpO1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ2FsdDogJywgdGhpcy5hbHQpO1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ3NpemVzOiAnLCB0aGlzLnNpemVzKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdzcmNzZXQ6ICcsIHRoaXMuc3Jjc2V0KTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCd1c2VtYXA6ICcsIHRoaXMudXNlbWFwKTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdoZWlnaHQ6ICcsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdtYXhIZWlnaHQ6ICcsIHRoaXMubWF4SGVpZ2h0KTtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCd3aWR0aDogJywgdGhpcy53aWR0aCk7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnbWF4V2lkdGg6ICcsIHRoaXMubWF4V2lkdGgpO1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJy0gSW1hZ2UgU3R5bGUgUHJvcGVydGllcyAtJyk7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnY2xhc3M6ICcsIHRoaXMuY2xhc3MpO1xyXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoJ3N0eWxlczogJywgdGhpcy5zdHlsZXMpO1xyXG4gIH07XHJcbn1cclxuIiwiPGltZyBcclxuW3N0eWxlXT1cInN0eWxlc1wiIFxyXG5bbmdDbGFzc109XCJjbGFzc1wiIFxyXG5bc3JjXT1cInNyY1wiIFxyXG5bc3R5bGUubWF4LXdpZHRoXT1cIm1heFdpZHRoXCJcclxuW3N0eWxlLmhlaWdodF09XCJtYXhIZWlnaHRcIi8+XHJcbiJdfQ==