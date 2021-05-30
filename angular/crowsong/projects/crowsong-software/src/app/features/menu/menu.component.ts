import { Component, Input, OnInit } from '@angular/core';
import { Item } from './types/item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  @Input() containerStyles: string = '';
  @Input() items: Array<Item> = [];

  constructor(){ 
    console.log('MenuComponent: constructor');
  };

  ngOnInit(){
    //console.groupCollapsed('MenuComponent');
    console.log('path: app/features/menu/');
    console.log('containerStyles: ', this.containerStyles);
    console.log('items: ', this.items);
    //console.groupEnd();
  };
};
