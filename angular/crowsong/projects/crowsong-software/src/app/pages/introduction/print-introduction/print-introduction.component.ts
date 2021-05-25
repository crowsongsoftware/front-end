import { Component, Input } from '@angular/core';
import { Section } from '../introduction.state';

@Component({
  selector: 'app-print-introduction',
  templateUrl: './print-introduction.component.html',
  styleUrls: ['./print-introduction.component.scss']
})
export class PrintIntroductionComponent {
  @Input() title: string = '';
  @Input() sections: Array<Section> = [];
  
  constructor() { };
};
