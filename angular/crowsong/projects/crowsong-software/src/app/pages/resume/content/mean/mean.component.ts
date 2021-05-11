import { Component, OnInit } from '@angular/core';
import { ExperienceState, ExperienceDetails, ExperienceSummary } from '../../resume.types';
import { MeanService } from './mean.service';

@Component({
  selector: 'resume-mean',
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.scss']
})
export class MeanComponent implements OnInit {
    public title: string;
    public titleStyles: string;
    //public experienceTitle: string;
    //public experienceSummaries: Array<ExperienceSummary>;
    //public experienceDetails: Array<ExperienceDetails>;
    public experienceState: ExperienceState;

    constructor(private meanService: MeanService) { 
      this.title = this.meanService.State.title;
      this.titleStyles = this.meanService.State.titleStyles;
      //this.experienceTitle = this.meanService.State.experienceState.title;
      //this.experienceSummaries = this.meanService.State.experienceState.summaries;
      //this.experienceDetails = this.meanService.State.experienceState.details;
      this.experienceState = this.meanService.State.experienceState;
    };

    ngOnInit(): void {
      console.groupCollapsed("page/resume/content/mean/MeanComponent")
      console.log("Title: ", this.title);
      console.log("Title Styles: ", this.titleStyles);
      console.log("Experience State", this.experienceState);
      console.groupEnd();
    };
};
