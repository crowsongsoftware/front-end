import { Component, Input, OnInit } from '@angular/core';

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

  private log(){
    console.log('email: ', this.email);
    console.log('name: ', this.name);
    console.log('subtitle: ', this.subtitle);
    console.log('title: ', this.title);
  };

  constructor() { };

  ngOnInit(){
    this.log();
  };
};
