import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionComponent } from './institution.component';
import { TitleComponent } from './title/title.component';
import { AccountComponent } from './components/account/account.component';



@NgModule({
  declarations: [
    InstitutionComponent,
    TitleComponent,
    AccountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InstitutionModule { }
