import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SelectSectionService } from '../select-section.service';
import { Section } from './section';

@Component({
  selector: 'select-sections',
  templateUrl: './select-sections.component.html',
  styleUrls: ['./select-sections.component.scss']
})
export class SelectSectionsComponent implements OnInit{
  @Input() title: string = '';
  @Input() titleStyles: string = '';
  public sectionList: Array<Section> = [];
  
  private setState(){
    //let state = this.selectSectionService.State;
    //this.title = state.title;
    //this.titleStyles = state.titleStyles;
    //this.sectionList = state.sectionList;
  };

  private log(){
    console.log('title: ', this.title);
    console.log('titleStyles: ', this.titleStyles);
    console.log('sectionList: ', this.sectionList);
  };

  public onCheckboxChange(event: Event){
    console.log('Checkbox Changed....Event: ', event);
  };

  public print(form: NgForm){
    
    console.log('Submitted form: ', form.value);
    window.print();
  };

  constructor(private selectSectionService: SelectSectionService) {
    this.setState();
   };

   ngOnInit(){
     this.log();
   }
};
