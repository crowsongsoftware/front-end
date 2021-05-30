/* Angular Core Components */
import { Component, OnInit } from '@angular/core';

/* NGX Logger */
import { NGXLogger} from 'ngx-logger';

/* App Service */
import { AppService } from './app.service';
import { AppStore } from './app.store';
import { AppState, MenuItem } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    AppService,
    AppStore
  ]
})
export class AppComponent implements OnInit {
  public featherImagePath: string = '';
  public headerImageStyles: string = '';
  public headerImageSrc: string = '';
  public menuContainerStyles: string = '';
  public menuItems: Array<MenuItem> = [];

  constructor(
    private _appService: AppService, private logger: NGXLogger){
    this.getState();  
  };

  private getState(){
    let state: AppState = this._appService.State;
    this.setHeaderState(state);
    this.setMenuState(state);
    this.setFeatherImagePath(state);
  };

  private setHeaderState(state: AppState){
    this.headerImageStyles = state.headerState.imgStyles;
    this.headerImageSrc = state.headerState.imgSrc;
  };

  private setMenuState(state: AppState){
    this.menuContainerStyles = state.menuState.containerStyles;
    this.menuItems = state.menuState.menuItems;
  };

  private setFeatherImagePath(state: AppState){
    this.featherImagePath = state.featherImagePath;
  };
  
  ngOnInit(){
    this.logger.debug('----------------');
    this.logger.debug('- AppComponent -');
    this.logger.debug('----------------');
    this.logger.debug('featherImagePath: ', this.featherImagePath);
    this.logger.debug('headerImageStyles: ', this.headerImageStyles);
    this.logger.debug('headerImageSrc: ', this.headerImageSrc);
    this.logger.debug('menuContainerStyles: ', this.menuContainerStyles);
    this.logger.debug('menuItems: ', this.menuItems);
  };
};