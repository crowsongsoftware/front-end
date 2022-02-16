import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialComponent } from './financial.component';
import { InstitutionModule } from './modules/page/institution/institution.module';


@NgModule({
  declarations: [
    FinancialComponent
  ],
  imports: [
    CommonModule,
    InstitutionModule
  ],
  exports: [
    FinancialComponent
  ]
})
export class FinancialModule { }
