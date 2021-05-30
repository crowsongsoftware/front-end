/* Angular Core Components */
import { Component, Input, OnInit } from '@angular/core';

/* NGX Logger */
import { NGXLogger} from 'ngx-logger';

/* Types */
import { Item } from './item/item';

@Component({
  selector: 'lib-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  /* Input Properties for Image Library */
  @Input() imgAlt: string = '';
  @Input() imgClass = '';
  @Input() imgHeight: string = '';
  @Input() imgSizes: string = '';
  @Input() imgSrc: string = '';
  @Input() imgSrcSet: string = '';
  @Input() imgStyles: string = '';
  @Input() imgUseMap: string = '';
  @Input() imgWidth: string = '';

  /* Input Properties for Navigation Library */
  @Input() containerStyles: string = '';
  @Input() items: Array<Item> = [];

  public trackByFn(index: number, item: any) { return item.id };
    
  constructor(private logger: NGXLogger ) {};

  ngOnInit(): void {
    this.logger.debug('--------------------');
    this.logger.debug('@crowsong/navigation');
    this.logger.debug('--------------------');
    this.logger.debug("- Image Properties -");
    this.logger.debug("Image Alt: ", this.imgAlt);
    this.logger.debug("Image Class: ", this.imgClass);
    this.logger.debug("Image Height: ", this.imgHeight);
    this.logger.debug("Image Width: ", this.imgWidth);
    this.logger.debug('Image Sizes: ', this.imgSizes);
    this.logger.debug('Image Src: ', this.imgSrc);
    this.logger.debug('Image Src Set: ', this.imgSrcSet);
    this.logger.debug("Image Styles: ", this.imgStyles);
    this.logger.debug("Image Use Map: ", this.imgUseMap);
    this.logger.debug("- Navigation Properties -");
    this.logger.debug('Items: ', this.items);
    this.logger.debug('Container Styles: ', this.containerStyles);
  };
}
