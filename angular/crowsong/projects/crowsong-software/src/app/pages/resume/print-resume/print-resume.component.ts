import { Component, Input } from '@angular/core';
import { MenuItem } from '../resume.types';

@Component({
  selector: 'app-print-resume',
  templateUrl: './print-resume.component.html',
  styleUrls: ['./print-resume.component.scss']
})
export class PrintResumeComponent{
    @Input() name: string = '';
    @Input() email: string = '';
    @Input() title: string = '';
    @Input() titleStyles: string = '';
    @Input() menuContainerStyles: string = '';  
    @Input() menuItems: Array<MenuItem> = []; 
    //@Input() titleStyles: object;
    //@Input() menuContainerStylesObj: object;
    constructor() { 
      //this.name = this._state.name;
      //this.email = this._state.email;
      //this.title = this._state.title;
      //this.titleStyles = this._state.titleStyles;
      //this.menuContainerStylesObj = this._state.menuContainerStylesObj;
      //this.menuContainerStyles = this._state.menuContainerStyles;
      //this.menuItems = this._state.menuItems;
    };
}
