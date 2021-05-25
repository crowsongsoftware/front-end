import { Component, Input } from '@angular/core';
import { Section } from '../introduction.state';

@Component({
  selector: 'app-display-introduction',
  templateUrl: './display-introduction.component.html',
  styleUrls: ['./display-introduction.component.scss']
})
export class DisplayIntroductionComponent {
  @Input() title: string = '';
  @Input() sections: Array<Section> = [];

  constructor() { };

  public printPage() {
    window.print();
  };
};
