import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCropComponent } from './crop/image-crop.component';
import { ImageDisplayComponent } from './display/image-display.component';
import { ImageUploadComponent } from './upload/image-upload.component';
import * as i0 from "@angular/core";
export class ImageModule {
}
ImageModule.ɵfac = function ImageModule_Factory(t) { return new (t || ImageModule)(); };
ImageModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ImageModule });
ImageModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            ImageCropperModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ImageCropComponent,
                    ImageDisplayComponent,
                    ImageUploadComponent
                ],
                imports: [
                    CommonModule,
                    ImageCropperModule
                ],
                exports: [
                    ImageCropComponent,
                    ImageDisplayComponent,
                    ImageUploadComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ImageModule, { declarations: [ImageCropComponent,
        ImageDisplayComponent,
        ImageUploadComponent], imports: [CommonModule,
        ImageCropperModule], exports: [ImageCropComponent,
        ImageDisplayComponent,
        ImageUploadComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY3Jvd3NvbmcvaW1hZ2Uvc3JjL2xpYi9pbWFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBa0J2RSxNQUFNLE9BQU8sV0FBVzs7c0VBQVgsV0FBVzs2REFBWCxXQUFXO2lFQVZiO1lBQ1AsWUFBWTtZQUNaLGtCQUFrQjtTQUNuQjt1RkFPVSxXQUFXO2NBaEJ2QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtvQkFDbEIscUJBQXFCO29CQUNyQixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIscUJBQXFCO29CQUNyQixvQkFBb0I7aUJBQ3JCO2FBQ0Y7O3dGQUNZLFdBQVcsbUJBZHBCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsb0JBQW9CLGFBR3BCLFlBQVk7UUFDWixrQkFBa0IsYUFHbEIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJNb2R1bGUgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XHJcblxyXG5pbXBvcnQgeyBJbWFnZUNyb3BDb21wb25lbnQgfSBmcm9tICcuL2Nyb3AvaW1hZ2UtY3JvcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZURpc3BsYXlDb21wb25lbnQgfSBmcm9tICcuL2Rpc3BsYXkvaW1hZ2UtZGlzcGxheS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZVVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEltYWdlQ3JvcENvbXBvbmVudCxcclxuICAgIEltYWdlRGlzcGxheUNvbXBvbmVudCxcclxuICAgIEltYWdlVXBsb2FkQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBJbWFnZUNyb3BwZXJNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEltYWdlQ3JvcENvbXBvbmVudCxcclxuICAgIEltYWdlRGlzcGxheUNvbXBvbmVudCxcclxuICAgIEltYWdlVXBsb2FkQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VNb2R1bGUgeyB9XHJcbiJdfQ==