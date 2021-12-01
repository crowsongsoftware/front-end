import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { errorRoutes } from './page-not-found.routes';



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(errorRoutes)
  ],
  exports:[
    PageNotFoundComponent
  ]
})
export class ErrorModule { }
