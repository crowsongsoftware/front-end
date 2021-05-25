import { Component } from '@angular/core';
import { IntroductionService } from './introduction.service';
import { IntroductionState, Section } from './introduction.state';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
    public imageAlt:string = ''
    public imageClass: string = '';
    public imageHeight: string = '';
    public imagePath: string = '';
    public imageStyles: object = {};
    public imageWidth: string = '';
    public title: string = '';
    public sections: Array<Section> = [];
    public titleStyles: object = {};
    
    private state: IntroductionState;
   
    constructor(private introductionService: IntroductionService) { 
      this.state = this.introductionService.getState();
      this.setTitle();
      this.populateSections();
    };

    private setTitle(){
      this.title = this.state.title;
    }

    private populateSections(){
      this.sections = this.state.sections;
    };
};
