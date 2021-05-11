import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-list',
  templateUrl:'./list.component.html'
})
export class ListComponent implements OnInit {
    @Input() list: Array<any> = [];
    @Input() styles: string = '';

    public trackByFn(index: number, item: any) { return item.id };

  constructor() {};

  ngOnInit(): void {};
}
