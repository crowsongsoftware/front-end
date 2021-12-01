import { Component, Input, OnInit } from '@angular/core';

/* NGX Logger */
import { NGXLogger} from 'ngx-logger';

@Component({
  selector: 'lib-list',
  templateUrl:'./list.component.html'
})
export class ListComponent implements OnInit{
  @Input() list: Array<any> = [];
  @Input() styles: string = '';

  public trackByFn(index: number, item: any) { return item.id };

  constructor(private logger: NGXLogger) {};

  ngOnInit(){
    this.logger.debug('------------------');
    this.logger.debug('- @crowsong/list -');
    this.logger.debug('------------------');
    this.logger.debug('list: ', this.list);
    this.logger.debug('styles', this.styles);
  };
};
