import { Component, OnInit } from '@angular/core';
import { NetService } from './net.service';

@Component({
  selector: 'resume-net',
  templateUrl: './net.component.html',
  styleUrls: ['./net.component.scss']
})
export class NetComponent implements OnInit {
    public title: string;
    public titleStyles: string;

    constructor(private netService: NetService) { 
      this.title = this.netService.State.title;
      this.titleStyles = this.netService.State.titleStyles;
    };

    ngOnInit(): void { };
}
