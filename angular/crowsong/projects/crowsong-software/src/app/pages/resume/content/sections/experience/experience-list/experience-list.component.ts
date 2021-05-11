import { Component, Input, OnInit } from '@angular/core';
import { ExperienceDetails, ExperienceState, ExperienceSummary } from '../../../../resume.types';

@Component({
  selector: 'resume-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {
  @Input() experienceSummaries: Array<ExperienceSummary> = [];
  @Input() experienceDetails: Array<ExperienceDetails> = [];
  @Input() experienceState: ExperienceState = { title: '', titleStyles: '', summaries: [], details: []}
  
  constructor() {};

  ngOnInit(): void {
    console.groupCollapsed("page/resume/content/sections/experience/experienceList");
    console.log("Experience State: ", this.experienceState);
    console.groupEnd();
  };
};
