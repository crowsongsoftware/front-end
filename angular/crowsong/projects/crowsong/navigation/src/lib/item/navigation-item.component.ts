import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent implements OnInit {
    @Input() image: string = '';
    @Input() text: string = '';
    @Input() route: string = '';
    @Input() styles: string = '';

    constructor() {};

    ngOnInit(): void {
      console.log("Image Path: ", this.image);
     };
};
