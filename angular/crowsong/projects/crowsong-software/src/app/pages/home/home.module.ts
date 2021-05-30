import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* NGX Logger */
import { NGXLogger} from 'ngx-logger';

import { HomeRoutes } from './home.routes';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(HomeRoutes)
    ],
    exports: [HomeComponent]
})
export class HomeModule {
    constructor(private logger: NGXLogger){
        this.logger.debug('--------------');
        this.logger.debug('- HomeModule -');
        this.logger.debug('--------------');
    };
 };
