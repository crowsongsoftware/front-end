import { Component, OnInit } from '@angular/core';
import { IntroductionService } from './introduction.service';
import { IntroductionState } from './introduction.state';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
    public imageAlt:string = ''
    public imageClass: string = '';
    public imageHeight: string = '';
    public imagePath: string = '';
    public imageStyles: object = {};
    public imageWidth: string = '';
    public title: string = '';
    public titleStyles: object = {};
    public introductionState: IntroductionState;
    //public heading: string = '';
    //public sections: Array<IntroductionState> = [];
    //public paragraph: object = {};

    constructor(private introductionService: IntroductionService) { 
      this.introductionState = this.introductionService.getState();
    };

    ngOnInit(): void {};
}
