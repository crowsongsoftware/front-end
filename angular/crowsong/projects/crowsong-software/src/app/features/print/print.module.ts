import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSectionsComponent } from './select-sections/select-sections.component'
import { PrintComponent } from './print.component';

@NgModule({
  declarations: [
    PrintComponent,
    SelectSectionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PrintComponent
  ]
})
export class PrintModule { }
