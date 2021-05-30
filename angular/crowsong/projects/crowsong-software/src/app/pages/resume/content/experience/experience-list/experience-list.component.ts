import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../types/experience';
import { ExperienceDetail } from '../types/experienceDetail';
import { ExperienceSummary } from '../types/experienceSummary';

@Component({
  selector: 'resume-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {
  @Input() experienceSummaries: Array<ExperienceSummary> = [];
  @Input() experienceDetails: Array<ExperienceDetail> = [];
  @Input() experience: Experience = { title: '', titleStyles: '', summaries: [], details: []}
  
  constructor() {};

  ngOnInit(): void {
    console.groupCollapsed("page/resume/content/sections/experience/experienceList");
    console.log("Experience State: ", this.experience);
    console.groupEnd();
  };
};
