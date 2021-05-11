/* Angular Core Components */
import { Component, OnInit } from '@angular/core';

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
  public headerImageStyles: string = '';
  public headerImageSrc: string = '';
  public menuContainerStylesObj: object = {};
  public menuContainerStylesStr: string = '';
  public menuItems: Array<MenuItem> = [];
  
  constructor(private _appService: AppService){
    this.getState();  
  };

  private getState(){
    let state: AppState = this._appService.State;
    this.setHeaderState(state);
    this.setMenuState(state);
  };

  private setHeaderState(state: AppState){
    this.headerImageStyles = state.headerState.imgStyles;
    this.headerImageSrc = state.headerState.imgSrc;
  };

  private setMenuState(state: AppState){
    this.menuContainerStylesObj = state.menuState.containerStyles;
    this.menuContainerStylesStr = state.menuState.containerStylesStr;
    this.menuItems = state.menuState.menuItems;
  };
  
  ngOnInit(){
    console.groupCollapsed("app/AppComponent");
    /* Header Properties */
    console.groupCollapsed("Header Properties");
    console.log("headerImageStyles: ", this.headerImageStyles);
    console.log("headerImageSrc: ", this.headerImageSrc);
    console.groupEnd();
    
    /* Menu Properties */
    console.groupCollapsed("Menu Properties");
    console.log("menuContainerStylesObj: ", this.menuContainerStylesObj);
    console.log("menuContainerStylesStr: ", this.menuContainerStylesStr);
    console.log("menuItems: ", this.menuItems);
    console.groupEnd();
    
    console.groupEnd();

  };
};
