import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

/* TBD MenuState */
import { MenuItem } from './sections/menu/types/menu-item';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  
  /* Menu TBD MenuState */
  public menuContainerStyles: string = '';  
  public menuItems: Array<MenuItem> = []; 

  private setMenuState(){
    //this.menuContainerStyles = this.resumeService.State.menu.menuContainerStyles;
    //this.menuItems = this.resumeService.State.menu.menuItems;
  };

  private log(){
    this.logger.debug('-------------------');
    this.logger.debug('- ResumeComponent -');
    this.logger.debug('-------------------');
    this.logger.debug("path: app/pages/resume/");
    //this.logger.debug("name: ", this.heading.name);
    //this.logger.debug("email: ", this.headinemail);
    //this.logger.debug("title: ", this.title);
    //this.logger.debug("subtitle: ", this.subtitle);
    //this.logger.debug("menuContainerStyles: ", this.menuContainerStyles);
    //this.logger.debug("menuItems: ", this.menuItems);
  };

  constructor( 
                private logger: NGXLogger) { 
                this.setMenuState();
  };

  ngOnInit(): void {
    //this.log();
  };
};
