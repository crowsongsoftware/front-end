import { Component, Input, Output } from '@angular/core';
import { Section } from '../introduction.state';

@Component({
  selector: 'print-introduction',
  templateUrl: './print-introduction.component.html',
  styleUrls: ['./print-introduction.component.scss']
})
export class PrintIntroductionComponent {
  @Input() title: string = '';
  @Input() sections: Array<Section> = [];

  constructor() { };
};
