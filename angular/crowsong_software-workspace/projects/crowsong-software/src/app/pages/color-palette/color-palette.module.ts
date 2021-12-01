import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ColorPaletteComponent } from './color-palette.component';
import { colorPaletteRoutes } from './color-palette.routes';



@NgModule({
  declarations: [
    ColorPaletteComponent
  ],
  imports: [
    CommonModule,
  RouterModule.forChild(colorPaletteRoutes)

  ],
  exports:[
    //ColorPaletteComponent
  ]
})
export class ColorPaletteModule { }
