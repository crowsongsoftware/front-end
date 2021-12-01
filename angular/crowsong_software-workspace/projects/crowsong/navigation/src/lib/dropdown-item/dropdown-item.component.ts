import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item/item';
@Component({
  selector: 'lib-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss']
})
export class DropdownItemComponent implements OnInit {
  @Input() image: string = '';
  @Input() text: string = '';
  @Input() route: string = '';
  @Input() styles: string = '';
  @Input() items: Array<Item> = [];
  
  public trackByFn(index: number, item: any) { return item.id };
  constructor() { };

  ngOnInit(): void { };
};
