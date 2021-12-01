import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public text: string = '';
  public image: string = '';

  constructor() { };

  ngOnInit(): void { };
};
