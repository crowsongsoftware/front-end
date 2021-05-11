import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-image',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent implements OnInit {
  /* Image Attributes */
  @Input() alt: string = '';
  @Input() sizes: string = '';
  @Input() srcset: string = '';
  @Input() usemap: string = '';
  
  /* Angular Bindings */
  @Input() src: string = '';
  @Input() class: string = '';
  @Input() styles: object = {};
  @Input() styleStr: string = '';
  
  /* Image Width */
  @Input() width: string = '';
  @Input() maxWidth: string = '100%';

  /* Image Height */
  @Input() height: string = 'auto';
  @Input() maxHeight: string = '';
  
  constructor() {};

  ngOnInit(): void {
    console.groupCollapsed("@crowsong/image");
    console.log("Image Path: ", this.src);
    console.groupEnd();
  };
}
