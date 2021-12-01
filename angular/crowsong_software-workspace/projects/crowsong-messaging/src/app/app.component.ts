import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public header: object = {title: 'Crowsong Messaging'}
  title = 'crowsong-messaging';
}
