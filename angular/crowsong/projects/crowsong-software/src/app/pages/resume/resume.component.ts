import { Component, OnInit } from '@angular/core';
import { ResumeService } from './resume.service';
import { MenuItem, ResumeState } from './resume.types';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
    private _state: ResumeState;
    public name: string;
    public email: string;
    public title: string;
    public titleStyles: object;
    public menuContainerStylesObj: object;
    public menuContainerStyles: string;  
    public menuItems: Array<MenuItem>; 
    
    constructor(private resumeService: ResumeService) { 
      this._state = resumeService.State;
      this.name = this._state.name;
      this.email = this._state.email;
      this.title = this._state.title;
      this.titleStyles = this._state.titleStyles;
      this.menuContainerStylesObj = this._state.menuContainerStylesObj;
      this.menuContainerStyles = this._state.menuContainerStyles;
      this.menuItems = this._state.menuItems;
    };

    ngOnInit(): void { 
      console.log("Resume; ResumeComponent: _state ", this._state);
      console.log("Resume; ResumeComponent; containerStyles: ", this.menuContainerStyles);
    };
}
