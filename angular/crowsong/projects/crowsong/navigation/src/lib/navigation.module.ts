import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageModule } from '@crowsong/image';
import { NavigationComponent } from './navigation.component';
import { NavigationItemComponent } from './item/navigation-item.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';


@NgModule({
  declarations: [
    NavigationComponent,
    NavigationItemComponent,
    DropdownItemComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    ImageModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
