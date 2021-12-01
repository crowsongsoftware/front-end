import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit {
  public type: string = "";
  public title: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
