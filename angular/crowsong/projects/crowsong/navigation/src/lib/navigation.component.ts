import { Component, Input, OnInit } from '@angular/core';
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
  @Input() imgStyles: object = {};
  @Input() imgUseMap: string = '';
  @Input() imgWidth: string = '';

  /* Input Properties for Navigation Library */
  //@Input() isDropdown: boolean = false;
  @Input() containerStyles: object = {};
  @Input() containerStylesStr: string = '';
  @Input() items: Array<Item> = [];

  public trackByFn(index: number, item: any) { return item.id };
    
  constructor() {};

  ngOnInit(): void {
    console.groupCollapsed("@crowsong/navigation");
    console.log("Image Alt: ", this.imgAlt);
    console.log("Image Class: ", this.imgClass);
    console.log("Image Height: ", this.imgHeight);
    console.log('Image Src: ', this.imgSrc);
    console.log('Items: ', this.items);
    console.groupEnd();
  };
}
