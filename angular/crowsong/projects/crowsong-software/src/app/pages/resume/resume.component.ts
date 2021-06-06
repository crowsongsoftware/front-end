import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { ResumeService } from './resume.service';
import { MenuItem } from './types/menu/menu-item';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
    public name: string = '';
    public title: string = '';
    public subtitle: string = '';
    public email: string = '';
    public menuContainerStyles: string = '';  
    public menuItems: Array<MenuItem> = []; 
    
    private setState(){
      let state = this.resumeService.State;  
      this.name = state.header.name;
      this.email = state.header.email;
      this.title = state.header.title;
      this.subtitle = state.header.subTitle;
      this.menuContainerStyles = state.menu.menuContainerStyles;
      this.menuItems = state.menu.menuItems;
    };

    private log(){
      this.logger.debug('-------------------');
      this.logger.debug('- ResumeComponent -');
      this.logger.debug('-------------------');
      this.logger.debug("path: app/pages/resume/");
      this.logger.debug("name: ", this.name);
      this.logger.debug("email: ", this.email);
      this.logger.debug("title: ", this.title);
      this.logger.debug("subtitle: ", this.subtitle);
      this.logger.debug("menuContainerStyles: ", this.menuContainerStyles);
      this.logger.debug("menuItems: ", this.menuItems);
    };

    constructor( private resumeService: ResumeService, private logger: NGXLogger) { 
      this.setState();
    };

    ngOnInit(): void {
      //this.log();
    };
};
