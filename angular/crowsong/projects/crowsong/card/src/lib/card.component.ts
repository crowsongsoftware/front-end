import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: 'card.component.html',
  styleUrls: [ 'card.component.scss']
})
export class CardComponent{
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() body: Array<string> = [];
  @Input() footer: string = '';
  @Input() cardStyles: string = '';
  @Input() titleStyles: string = '';
  
  constructor() { };
};
