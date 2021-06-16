import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { ResumeService } from './resume.service';
import { EducationState } from './sections/education/education-state/education.state';
import { ExperienceState } from './sections/experience/experience.state';
import { HeadingState } from './state-management/heading/heading.state';

/* TBD MenuState */
import { MenuItem } from './sections/menu/types/menu-item';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public education: EducationState;
  public experience: ExperienceState;
  public heading: HeadingState;
  
  /* Menu TBD MenuState */
  public menuContainerStyles: string = '';  
  public menuItems: Array<MenuItem> = []; 
  
  /* Skills */

  private setMenuState(){
    this.menuContainerStyles = this.resumeService.State.menu.menuContainerStyles;
    this.menuItems = this.resumeService.State.menu.menuItems;
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

  constructor( private resumeService: ResumeService, 
                private logger: NGXLogger) { 
                this.setMenuState();
                this.education = this.educationService.State;
                this.experience = this.experienceService.State;
                this.heading = this.headingService.State;
  };

  ngOnInit(): void {
    //this.log();
  };
};
