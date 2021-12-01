import { Component, Input } from '@angular/core';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent{
  @Input() email: string = '';
  @Input() name: string  = '';
  @Input() subtitle: string = '';
  @Input() title: string = '';

  constructor() { };
};
