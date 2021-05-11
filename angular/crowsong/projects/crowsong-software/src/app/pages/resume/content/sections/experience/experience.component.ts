import { Component, Input, OnInit } from '@angular/core';
import { ExperienceState } from '../../../resume.types';


@Component({
  selector: 'resume-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
    @Input() experienceState: ExperienceState = { title: '', titleStyles: '', summaries: [], details: []};  
    
    constructor() {};

    ngOnInit(): void {
      console.groupCollapsed("page/resume/sections/experience/ExperienceComponent")
      console.log("Title: ", this.experienceState.title);
      console.log("Title Styles: ", this.experienceState.titleStyles);
      console.log("Summaries: ", this.experienceState.summaries);
      console.log("Details: ", this.experienceState.details);
      console.groupEnd();
    };
};
