import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Year } from './year';

@Component({
  selector: 'app-calendar-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {
  private _yearViewModel$!: BehaviorSubject<Year>;

  private data(){
    this._yearViewModel$.next({
    name: () => "2021",
    currentMonth: () => 'November',
    currentDay: () => 'Friday',
    currenttime: () => 'the current ime'
  });
};

  constructor() {
    this.data();
  };

  ngOnInit(): void {
    this._yearViewModel$.subscribe(
      x => console.log(
        'name: ', x.name,
        'day: ', x.currentDay, 
        'month: ', x.currentMonth, 
        'time: ', x.currenttime
        )
    );
   };
};
