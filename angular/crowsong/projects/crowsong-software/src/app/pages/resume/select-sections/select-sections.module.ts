import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../../../features/header/header.module'; 
import { SelectSectionsRoutes} from './select-sections.routes';
import { SelectSectionsComponent } from './select-sections.component';
import { SelectSectionService } from './select-section.service';
import { SelectSectionStore } from './select-sections.store';

@NgModule({
  declarations: [
    SelectSectionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    RouterModule.forChild(SelectSectionsRoutes)
  ],
  exports: [
    SelectSectionsComponent
  ],
  providers: [
    SelectSectionStore,
    SelectSectionService
  ]
})
export class SelectSectionsModule { };
