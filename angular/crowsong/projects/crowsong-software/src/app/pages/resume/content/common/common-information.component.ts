import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-information',
  templateUrl: './common-information.component.html',
  styleUrls: ['./common-information.component.scss']
})
export class CommonInformationComponent implements OnInit {
  /* Titles - Headers */
  public pageTitle: string = '';
  public sectionTitle: string = '';
  public subsectionTitle: string = '';
  public header: string = '';
  public pageData: string = '';

  /* Styles */
  public pageTitleStyles: object = {};
  public sectionTitleStyles: object = {};
  public subsectionTitleStyles: object = {};
  public headerStyles: object = {};
  public pageDataStyles: object = {};

  constructor() { };
  ngOnInit(): void { };
};
