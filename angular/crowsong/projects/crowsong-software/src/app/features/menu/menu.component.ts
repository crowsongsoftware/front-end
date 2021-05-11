import { Component, Input, OnInit } from '@angular/core';
import { MenuState, Item } from './menu.state';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() containerStyles: object = {};
  @Input() items: Array<Item> = [];

  constructor(){};

  ngOnInit(): void{};
};
