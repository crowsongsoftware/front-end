import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Institution } from './institution';

@Component({
  selector: 'education-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit, OnDestroy {
  @Input() institutions: Array<Institution> = [];
  
  constructor(private logger: NGXLogger) { };

  ngOnInit(): void {
    this.logger.debug('-----------------------');
    this.logger.debug('- InstitutionComponent -');
    this.logger.debug('-----------------------');
    this.logger.debug('Institutions: ', this.institutions);
  };

  ngOnDestroy(): void {
    console.clear();
  }
};
