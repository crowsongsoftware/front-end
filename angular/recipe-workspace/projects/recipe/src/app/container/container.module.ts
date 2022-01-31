import { NgModule } from '@angular/core';
import { SharedModule } from './shared_modules/shared.module';
import { RecipeDetailModule } from './feature_modules/recipe-detail/recipe-detail.module';
import { RecipeListModule } from './feature_modules/recipe-list/recipe-list.module';
import { ContainerComponent } from './container.component';

//import { CommonModule } from '@angular/common';
//import { HeaderModule } from './shared_modules/header/header.module';
//import { SidebarModule } from './shared_modules/sidebar/sidebar.module';


@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    SharedModule,
    RecipeDetailModule,
    RecipeListModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class ContainerModule { }
