import { Component, OnInit } from '@angular/core';
import { EducationService } from './education.service';
import { Institution } from '../../../resume.types';
@Component({
  selector: 'resume-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
    public title: string;
    public titleStyles: string;
    public institutions: Array<Institution> = [];

    constructor(private educationService: EducationService) { 
        this.title = this.educationService.State.title;
        this.titleStyles = this.educationService.State.titleStyles;
        this.institutions = this.educationService.State.institutions;
    };

    ngOnInit() {
      
    };
};