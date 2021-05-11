import { Component, Input, OnInit } from '@angular/core';
//import { skillSection } from './model/skill-section.model';

@Component({
  selector: 'resume-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    public heading: string = "";
   
    constructor() { 
        this.heading = "Skills";
    };

    ngOnInit(): void { };
}
