import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from '@crowsong/image';
import { NavigationModule } from '@crowsong/navigation';
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    NavigationModule,
    ImageModule
  ],
  exports:[
    MenuComponent
  ]
})
export class MenuModule { }
