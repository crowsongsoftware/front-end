import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() imgStyles: string = '';
  @Input() imgSrc: string = '';
  @Input() title: string = '';
  @Input() titleStyles: object = {};
  @Input() titleStylesStr: string = '';
  
  constructor() {};

  ngOnInit(): void { 
    console.groupCollapsed("features/HeaderComponent");
    console.log('Image Styles: ', this.imgStyles);
    console.log("Image Source: ", this.imgSrc);
    console.groupEnd();
    
  };

}
