import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { EducationService } from './education.service';
import { Institution } from './institution/institution';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
    public title: string = '';
    public titleStyles: string = '';
    public institutions: Array<Institution> = [];

    private setState(){
      this.title = this.educationService.State.title;
      this.institutions = this.educationService.State.institutions;
    };

    private log(){
      this.logger.debug('-------------------');
      this.logger.debug('- EducationComponent -');
      this.logger.debug('-------------------');
      this.logger.debug('title: ', this.title);
      this.logger.debug('institutions: ', this.institutions);
    };
    constructor(private educationService: EducationService, private logger: NGXLogger) { 
      this.setState();
    };

    ngOnInit() {
      this.log();
    };
};