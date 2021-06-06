import { Component, Input,OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { MenuItem } from '../types/menu/menu-item';

@Component({
  selector: 'display-resume',
  templateUrl: './display-resume.component.html'
})
export class DisplayResumeComponent implements OnInit{
    @Input() name: string = '';
    @Input() email: string = '';
    @Input() title: string = '';
    @Input() subtitle: string = '';
    @Input() menuContainerStyles: string = '';  
    @Input() menuItems: Array<MenuItem> = []; 
    
    private log(){
      this.logger.debug('-------------------');
      this.logger.debug('- DisplayResumeComponent -');
      this.logger.debug('-------------------');
      this.logger.debug('name: ', this.name);
      this.logger.debug('email: ', this.email);
      this.logger.debug('title: ', this.title);
      this.logger.debug('subTitle: ', this.subtitle);
      this.logger.debug('menuContainerStyles: ', this.menuContainerStyles);
      this.logger.debug('menuItems: ', this.menuItems);
    };

    constructor(private logger: NGXLogger) { };

    ngOnInit(){
      //this.log();
    };
}
