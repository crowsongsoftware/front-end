/* Angular Imports */
import { Component, Input, OnInit } from '@angular/core';

/* NGX Logger */
import { NGXLogger} from 'ngx-logger';

@Component({
  selector: 'lib-title',
  templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {
  @Input() title: string = '';
  @Input() styles: string = '';
  
  constructor(private logger: NGXLogger) { };

  ngOnInit(): void { 
    this.logger.debug('---------------------');
    this.logger.debug('-- @crowsong/title --');
    this.logger.debug('---------------------');
    this.logger.debug(' - TitleComponent -');
    this.logger.debug('title: ', this.title);
    this.logger.debug('styles', this.styles);
  };
}
