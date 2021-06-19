import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SelectSectionService } from './select-section.service';

@Component({
  templateUrl: './select-sections.component.html',
  styleUrls: ['./select-sections.component.scss']
})
export class SelectSectionsComponent implements OnInit{
  public title: string = '';
  public titleStyles: string = '';
  
  private setState(){
    let state = this.selectSectionService.State;
    this.title = state.title;
    this.titleStyles = state.titleStyles;
  };

  private log(){
    console.log('title: ', this.title);
    console.log('titleStyles: ', this.titleStyles);
  };
  
  public setupResume(form: NgForm){
    console.log("Print Event from SelectSections..form: ", form);
    this.print();
  };

  public onCheckboxChange(value: Event){

  };

  public print(){
    window.print();
  };

  constructor(private selectSectionService: SelectSectionService ) {
    console.log('SelectSectionsComponent...constructor');
    this.setState();
   };

  ngOnInit(){
     this.log();
  };
};
