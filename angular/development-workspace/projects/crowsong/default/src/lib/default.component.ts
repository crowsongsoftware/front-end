import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-default',
  template: `
    <p>
      default works!
    </p>
  `,
  styles: [
  ]
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
