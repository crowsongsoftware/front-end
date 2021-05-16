/* Angular Core Components */
import { Component } from '@angular/core';

/* Home Service */
import { HomeService } from './home.service';
import { HomeStore } from './home.store';
import { Card, defaultState, HomeState } from './home.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    HomeService,
    HomeStore
  ]
})
export class HomeComponent{
  state: HomeState = defaultState;
  cardCollection: Array<Card> = [];  
  cardStyles: string = ``;
  titleStyles: string = ``;
    
  constructor(private homeService: HomeService) {
    this.getState();
    this.cardStyles = this.state.cardStyles;
    this.titleStyles = this.state.titleStyles;
    this.cardCollection = this.state.cardCollection;

    console.log('TBD');
  };

  private getState(){
    this.state = this.homeService.getState();
  };
};
