/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Crowsong Library Modules */
import { ImageModule } from '@crowsong/image';
import { TitleModule } from '@crowsong/title';

/* Header Components / Services */
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [ 
    CommonModule,
    ImageModule,
    TitleModule
   ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
