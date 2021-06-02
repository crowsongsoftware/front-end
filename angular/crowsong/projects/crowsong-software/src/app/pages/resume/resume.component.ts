import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
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
    public name: string = '';
    public title: string = '';
    public subTitle: string = '';
    public email: string = '';
    public menuContainerStyles: string = '';  
    public menuItems: Array<MenuItem> = []; 
    
    private setState(){
      this.name = this._state.header.name;
      this.email = this._state.header.email;
      this.title = this._state.header.title;
      this.subTitle = this._state.header.subTitle;
      this.menuContainerStyles = this._state.menu.menuContainerStyles;
      this.menuItems = this._state.menu.menuItems;
    };

    constructor( private resumeService: ResumeService, private logger: NGXLogger) { 
      this._state = this.resumeService.State;  
      this.setState();
    };

    ngOnInit(): void { 
      this.logger.debug('-------------------');
      this.logger.debug('- ResumeComponent -');
      this.logger.debug('-------------------');
      this.logger.debug("path: app/pages/resume/");
      this.logger.debug("name: ", this.name);
      this.logger.debug("email: ", this.email);
      this.logger.debug("title: ", this.title);
      this.logger.debug("subTitle: ", this.subTitle);
      this.logger.debug("menuContainerStyles: ", this.menuContainerStyles);
      this.logger.debug("menuItems: ", this.menuItems);
    };
}
