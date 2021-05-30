import { Component, Input,OnInit } from '@angular/core';
import { MenuItem } from '../types/menu/menu-item';

@Component({
  selector: 'app-display-resume',
  templateUrl: './display-resume.component.html',
  styleUrls: ['./display-resume.component.scss']
})
export class DisplayResumeComponent implements OnInit{
    @Input() name: string = '';
    @Input() email: string = '';
    @Input() title: string = '';
    @Input() subTitle: string = '';
    @Input() menuContainerStyles: string = '';  
    @Input() menuItems: Array<MenuItem> = []; 
    
    constructor() { };

    ngOnInit(){
      console.groupCollapsed('DisplayResumeComponent');
      console.log('Path: app/pages/resume/display-resume/');
      console.log('name: ', this.name);
      console.log('email: ', this.email);
      console.log('title: ', this.title);
      console.log('menuContainerStyles: ', this.menuContainerStyles);
      console.log('menuItems: ', this.menuItems);
      console.groupEnd();
    };
}
