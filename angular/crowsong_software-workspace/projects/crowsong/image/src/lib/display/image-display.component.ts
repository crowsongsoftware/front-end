import { Component, Input, OnInit } from '@angular/core';

/* NGX Logger */
import { NGXLogger} from 'ngx-logger';

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
  @Input() styles: string = '';
  
  /* Image Width */
  @Input() width: string = '';
  @Input() maxWidth: string = '100%';

  /* Image Height */
  @Input() height: string = 'auto';
  @Input() maxHeight: string = '';
  
  constructor(private logger: NGXLogger) {};

  ngOnInit(): void {
    this.logger.debug('-------------------------');
    this.logger.debug('- @crowsong/image -');
    this.logger.debug('- ImageDisplayComponent -');
    this.logger.debug('-------------------------');
    this.logger.debug('- Image Properties -');
    this.logger.debug('alt: ', this.alt);
    this.logger.debug('sizes: ', this.sizes);
    this.logger.debug('srcset: ', this.srcset);
    this.logger.debug('usemap: ', this.usemap);
    this.logger.debug('height: ', this.height);
    this.logger.debug('maxHeight: ', this.maxHeight);
    this.logger.debug('width: ', this.width);
    this.logger.debug('maxWidth: ', this.maxWidth);
    this.logger.debug('- Image Style Properties -');
    this.logger.debug('class: ', this.class);
    this.logger.debug('styles: ', this.styles);
  };
}
