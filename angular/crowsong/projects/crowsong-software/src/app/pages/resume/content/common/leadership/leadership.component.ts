import { Component, OnInit } from '@angular/core';
import { LeadershipService } from './leadership.service';
import { LeadershipTopic } from './leadership.state';

@Component({
  selector: 'resume-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {
    public title: string;
    public titleStyles: string;
    public leadershipTopics: Array<LeadershipTopic>;

    /* TODO
    public leadershipTopics: Array<leadershipModel> = [];
    */
     constructor(private leadershipService: LeadershipService) {
        this.title = this.leadershipService.State.title; 
        this.titleStyles = this.leadershipService.State.titleStyles;
        this.leadershipTopics = this.leadershipService.State.leadershipTopics;
    };

    ngOnInit(): void { };
}
