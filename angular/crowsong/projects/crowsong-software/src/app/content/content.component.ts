import { Component, OnInit } from '@angular/core';
import { ContentService } from './content.service';
import { IContentState } from './content.state';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public state: IContentState;

  constructor(private contentService: ContentService) { 
    this.state = this.contentService.State;
  };

  ngOnInit(): void {
    console.groupCollapsed("content/ContentComponent")
    console.log("State: ", this.state);
    console.groupEnd();
  };

}
