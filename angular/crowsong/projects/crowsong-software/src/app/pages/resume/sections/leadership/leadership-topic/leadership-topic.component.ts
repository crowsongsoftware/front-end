import { Component, Input, OnInit } from '@angular/core';
import { LeadershipTopic } from '../leadership.state';

@Component({
  selector: 'app-leadership-topic',
  templateUrl: './leadership-topic.component.html',
  styleUrls: ['./leadership-topic.component.scss']
})
export class LeadershipTopicComponent implements OnInit {
  @Input() title: string = '';
  @Input() titleStyles: string = '';

  @Input() leadershipTopics: Array<LeadershipTopic> = [];
  
  constructor() {};

  ngOnInit(): void {};
};
