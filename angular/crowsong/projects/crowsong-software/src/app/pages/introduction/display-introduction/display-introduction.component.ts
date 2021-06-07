import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Section } from '../introduction.state';

@Component({
  selector: 'display-introduction',
  templateUrl: './display-introduction.component.html',
  styleUrls: ['./display-introduction.component.scss']
})
export class DisplayIntroductionComponent {
  @Input() title: string = '';
  @Input() sections: Array<Section> = [];
  
  @Output() onPrint: EventEmitter<any> = new EventEmitter();
  
  public print(){
    this.onPrint.emit();
  };
  
  constructor() { };
};
