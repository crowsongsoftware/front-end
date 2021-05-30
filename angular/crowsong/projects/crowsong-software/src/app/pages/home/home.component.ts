/* Angular Core Components */
import { Component, OnInit } from '@angular/core';

/* NGX Logger */
import { NGXLogger} from 'ngx-logger';

/* Services */
import { HomeService } from './home.service';
import { HomeStore } from './home.store';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    HomeService,
    HomeStore
  ]
})
export class HomeComponent implements OnInit{
  constructor(private homeService: HomeService, private logger: NGXLogger) { };
  
  ngOnInit(){
    this.logger.debug('-----------------');
    this.logger.debug('- HomeComponent -');
    this.logger.debug('-----------------');
  };
};
