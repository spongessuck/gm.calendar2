import { Component } from '@angular/core';
import { GmEventItem, GmDayViewItem } from '../../src';
import { GmCalendarService } from '../../src/calendar.service';

interface MyEvent extends GmEventItem {
  title: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monthMode = true;
  today = new Date();
  monthDate = new Date();
  items: GmDayViewItem[];

  private _events: MyEvent[] = [
    {
      title: 'hi',
      date: new Date(),
      startTime: {
        hours: 12,
        minutes: 0
      },
      endTime: {
        hours: 12,
        minutes: 30
      }
    }
  ];

  constructor() {
    this.items = eventItemsToDayViewItems(this._events);
  }

  switch(_monthMode: boolean) {
    this.monthMode = _monthMode;
  }
}
