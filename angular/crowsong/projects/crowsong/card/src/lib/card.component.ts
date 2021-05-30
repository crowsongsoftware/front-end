/* Angular Core Imports */
import { Component, Input, OnInit } from '@angular/core';

/* NGX Logger */
import { NGXLogger} from 'ngx-logger';

@Component({
  selector: 'lib-card',
  templateUrl: 'card.component.html'
})
export class CardComponent implements OnInit{
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() body: Array<string> = [];
  @Input() footer: string = '';
  @Input() cardStyles: string = '';
  @Input() titleStyles: string = '';
  
  constructor(private logger: NGXLogger) { };

  ngOnInit(){
    this.logger.debug('--------------------');
    this.logger.debug('-- @crowsong/card --');
    this.logger.debug(' -CardComponent-');
    this.logger.debug('--------------------');
    this.logger.debug('image: ', this.image);
    this.logger.debug('title: ', this.title);
    this.logger.debug('body: ', this.body);
    this.logger.debug('footer: ', this.footer);
    this.logger.debug('cardStyles');
    this.logger.debug('titleStyles');
  };
};
