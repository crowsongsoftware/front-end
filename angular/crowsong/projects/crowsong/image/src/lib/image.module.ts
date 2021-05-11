import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';

import { ImageCropComponent } from './crop/image-crop.component';
import { ImageDisplayComponent } from './display/image-display.component';
import { ImageUploadComponent } from './upload/image-upload.component';

@NgModule({
  declarations: [
    ImageCropComponent,
    ImageDisplayComponent,
    ImageUploadComponent
  ],
  imports: [
    CommonModule,
    ImageCropperModule
  ],
  exports: [
    ImageCropComponent,
    ImageDisplayComponent,
    ImageUploadComponent
  ]
})
export class ImageModule { }
