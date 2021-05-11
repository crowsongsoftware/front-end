import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { contactRoutes } from './contact.routes';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoutes)
  ]
})
export class ContactModule { }
