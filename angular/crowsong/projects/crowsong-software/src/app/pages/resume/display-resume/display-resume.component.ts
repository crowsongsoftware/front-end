import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { MenuItem } from '../sections/menu/types/menu-item';

@Component({
  selector: 'display-resume',
  templateUrl: './display-resume.component.html'
})
export class DisplayResumeComponent implements OnInit{
    @Input() menuContainerStyles: string = '';  
    @Input() menuItems: Array<MenuItem> = []; 


    constructor(private logger: NGXLogger) { };
    
    private log(){
      this.logger.debug('--------------------------');
      this.logger.debug('- DisplayResumeComponent -');
      this.logger.debug('--------------------------');
      this.logger.debug('menuContainerStyles: ', this.menuContainerStyles);
      this.logger.debug('menuItems: ', this.menuItems);
    };

    

    ngOnInit(){
      //this.log();
    };
}
