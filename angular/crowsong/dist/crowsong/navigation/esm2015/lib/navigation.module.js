import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageModule } from '@crowsong/image';
import { NavigationComponent } from './navigation.component';
import { NavigationItemComponent } from './item/navigation-item.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import * as i0 from "@angular/core";
export class NavigationModule {
}
NavigationModule.ɵfac = function NavigationModule_Factory(t) { return new (t || NavigationModule)(); };
NavigationModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NavigationModule });
NavigationModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            RouterModule,
            ImageModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NavigationComponent,
                    NavigationItemComponent,
                    DropdownItemComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    ImageModule
                ],
                exports: [NavigationComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NavigationModule, { declarations: [NavigationComponent,
        NavigationItemComponent,
        DropdownItemComponent], imports: [CommonModule,
        RouterModule,
        ImageModule], exports: [NavigationComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jcm93c29uZy9uYXZpZ2F0aW9uL3NyYy9saWIvbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFnQmhGLE1BQU0sT0FBTyxnQkFBZ0I7O2dGQUFoQixnQkFBZ0I7a0VBQWhCLGdCQUFnQjtzRUFQbkI7WUFDTixZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVc7U0FDWjt1RkFHVSxnQkFBZ0I7Y0FiNUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIscUJBQXFCO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUM7b0JBQ04sWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7aUJBQ1o7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDL0I7O3dGQUNZLGdCQUFnQixtQkFYekIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixxQkFBcUIsYUFHckIsWUFBWTtRQUNaLFlBQVk7UUFDWixXQUFXLGFBRUgsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSW1hZ2VNb2R1bGUgfSBmcm9tICdAY3Jvd3NvbmcvaW1hZ2UnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL25hdmlnYXRpb24taXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEcm9wZG93bkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2Ryb3Bkb3duLWl0ZW0vZHJvcGRvd24taXRlbS5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOYXZpZ2F0aW9uQ29tcG9uZW50LFxyXG4gICAgTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQsXHJcbiAgICBEcm9wZG93bkl0ZW1Db21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6W1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgSW1hZ2VNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtOYXZpZ2F0aW9uQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbk1vZHVsZSB7IH1cclxuIl19