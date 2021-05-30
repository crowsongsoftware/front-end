import { Component, Input, OnInit } from '@angular/core';
import { Experience } from './types/experience';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
    @Input() experience: Experience = { title: '', titleStyles: '', summaries: [], details: []};  
    
    constructor() {};

    ngOnInit(): void {
      console.groupCollapsed("page/resume/sections/experience/ExperienceComponent")
      console.log("Title: ", this.experience.title);
      console.log("Title Styles: ", this.experience.titleStyles);
      console.log("Summaries: ", this.experience.summaries);
      console.log("Details: ", this.experience.details);
      console.groupEnd();
    };
};
