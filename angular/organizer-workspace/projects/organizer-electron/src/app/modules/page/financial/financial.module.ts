import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialComponent } from './financial.component';
import { InstitutionComponent } from './modules/page/institution/institution.component';


@NgModule({
  declarations: [
    FinancialComponent,
    InstitutionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FinancialComponent
  ]
})
export class FinancialModule { }
