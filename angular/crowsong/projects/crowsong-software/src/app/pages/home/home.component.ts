/* Angular Core Components */
import { Component, OnInit } from '@angular/core';

/* NGX Logger */
import { NGXLogger} from 'ngx-logger';

/* Services */
import { HomeService } from './home.service';
import { HomeStore } from './home.store';
import { BannerItem } from './home.state';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    HomeService,
    HomeStore
  ]
})
export class HomeComponent implements OnInit{
  public services: Array<string> = [];
  public banner: Array<BannerItem> = [];

  private setState(){
    this.services = this.homeService.State.services;
    this.banner = this.homeService.State.banner;
  };

  private log(){
    this.logger.debug('-----------------');
    this.logger.debug('- HomeComponent -');
    this.logger.debug('-----------------');
    this.logger.debug('Services: ', this.services);
    this.logger.debug('Banner: ', this.banner);
  };

  constructor(private homeService: HomeService, private logger: NGXLogger) { 
    this.setState();
  };
  
  ngOnInit(){
    this.log();
  };
};
