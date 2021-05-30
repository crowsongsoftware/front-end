import { Component, OnInit } from '@angular/core';
import { ResumeService } from './resume.service';
import { Resume } from './resume';
import { MenuItem } from './types/menu/menu-item';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
    private _state: Resume;
    public name: string;
    public title: string;
    public subTitle: string;
    public email: string;
    public menuContainerStyles: string;  
    public menuItems: Array<MenuItem>; 
    
    constructor(private resumeService: ResumeService) { 
      this._state = this.resumeService.State;
      this.name = this._state.header.name;
      this.email = this._state.header.email;
      this.title = this._state.header.title;
      this.subTitle = this._state.header.subTitle;
      this.menuContainerStyles = this._state.menu.menuContainerStyles;
      this.menuItems = this._state.menu.menuItems;
    };

    ngOnInit(): void { 
      console.groupCollapsed("ResumeComponent");
      console.log("path: app/pages/resume/");
      console.log("name: ", this.name);
      console.log("email: ", this.email);
      console.log("title: ", this.title);
      console.log("menuContainerStyles: ", this.menuContainerStyles);
      console.log("menuItems: ", this.menuItems);
      console.groupEnd();
    };
}
