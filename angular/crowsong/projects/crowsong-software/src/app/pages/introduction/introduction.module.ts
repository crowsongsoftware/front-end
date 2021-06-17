import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IntroductionRoutes } from './introduction.routes';
import { HeaderModule } from '../../features/header/header.module';
import { PrintIntroductionComponent } from './print-introduction/print-introduction.component';
import { IntroductionComponent } from './introduction.component';
import { IntroductionService } from './introduction.service';
import { IntroductionStore } from './introduction.store';
import { DisplayIntroductionComponent } from './display-introduction/display-introduction.component';

//import { PrintModule } from '../../features/print/print.module';

@NgModule({
    declarations: [
        IntroductionComponent,
        PrintIntroductionComponent,
        DisplayIntroductionComponent
    ],
    imports: [ 
        CommonModule,
        HeaderModule,
        RouterModule.forChild(IntroductionRoutes)
        //PrintModule,
    ],
    exports: [ 
        IntroductionComponent
     ],
    providers: [
        IntroductionService,
        IntroductionStore
    ]
})
export class IntroductionModule { }

