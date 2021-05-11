import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IntroductionRoutes } from './introduction.routes';
import { HeaderModule } from '../../features/header/header.module';
import { IntroductionComponent } from './introduction.component';
import { IntroductionService } from './introduction.service';
import { IntroductionStore } from './introduction.store';

@NgModule({
    declarations: [
        IntroductionComponent
    ],
    imports: [ 
        CommonModule,
        HeaderModule,
        RouterModule.forChild(IntroductionRoutes)
    ],
    exports: [ IntroductionComponent ],
    providers: [
        IntroductionService,
        IntroductionStore
    ]
})
export class CoverLetterModule { }

