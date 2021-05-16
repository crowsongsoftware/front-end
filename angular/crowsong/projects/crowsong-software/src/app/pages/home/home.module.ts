import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from '@crowsong/card';

import { HomeRoutes } from './home.routes';

import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        CardModule,
        RouterModule.forChild(HomeRoutes)
    ],
    exports: [HomeComponent]
})
export class HomeModule { }
