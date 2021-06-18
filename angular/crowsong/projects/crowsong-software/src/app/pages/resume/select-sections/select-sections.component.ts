import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { SelectSectionService } from './select-section.service';

@Component({
  templateUrl: './select-sections.component.html',
  styleUrls: ['./select-sections.component.scss']
})
export class SelectSectionsComponent implements OnInit{
  public title: string = '';
  public titleStyles: string = '';
  public form: FormGroup = this.formBuilder.group({});
  
  private setState(){
    let state = this.selectSectionService.State;
    this.title = state.title;
    this.titleStyles = state.titleStyles;
  };

  private log(){
    console.log('form: ', this.form);
    console.log('title: ', this.title);
    console.log('titleStyles: ', this.titleStyles);
  };

  public onCheckboxChange(value: Event){

  }

  public print(){
    window.print();
  };

  constructor(private selectSectionService: SelectSectionService, private formBuilder: FormBuilder) {
    this.setState();
   };

   ngOnInit(){
     this.log();
   }
};
