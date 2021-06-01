import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../types/experience';
import { ExperienceDetail } from '../types/experienceDetail';
import { ExperienceSummary } from '../types/experienceSummary';

@Component({
  selector: 'experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {
  @Input() experience: Array<Experience> = [];
  
  constructor() {};

  ngOnInit(): void {

  };
};
