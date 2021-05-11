import { Component, Input, OnInit } from '@angular/core';
import { Institution } from '../../../../resume.types';

@Component({
  selector: 'education-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit {
  @Input() institutions: Array<Institution> = [];
  
  constructor() { }

  ngOnInit(): void {
    console.groupCollapsed("education/institution/InstitutionComponent");
    console.log("institutions: ", this.institutions);
    console.groupEnd();
  }

}
