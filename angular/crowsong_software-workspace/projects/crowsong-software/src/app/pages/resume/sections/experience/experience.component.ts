import { Component, Input, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';
import { ExperienceState } from './experience.state';
import { Experience } from './types/experience';
//import { ExperienceListComponent } from './experience-list/experience-list.component';
//import { ExperienceDetailsComponent } from './experience-details/experience-details.component';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
    public title: string = '';
    public header: Array<string> = [];
    public experienceList: Array<Experience> = [];

    constructor(private experienceService: ExperienceService) {
      this.title = this.experienceService.State.title;
      this.header = this.experienceService.State.header;
      this.experienceList = this.experienceService.State.experienceList;
    };

    ngOnInit(): void { };
};
