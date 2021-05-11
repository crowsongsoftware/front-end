import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageModule } from '@crowsong/image';
import { ContentComponent } from './content.component';
import { ContentService } from './content.service';
import { ContentStore } from './content.store';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    ImageModule
  ],
  exports:[ContentComponent],
  providers:[
    ContentService,
    ContentStore
  ]
})
export class ContentModule { }
