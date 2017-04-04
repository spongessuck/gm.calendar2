import { Component } from '@angular/core';
import { GmEventItem,
         GmDayViewItem,
         eventItemsToDayViewItems } from '../../src';

interface MyEvent extends GmEventItem {
  title: string;
  date: Date | number;
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
  lastHour = new Date().getHours() - 1;

  allDayItem = {
    title: 'All day event',
    startTime: {
      hours: 0,
      minutes: 0
    },
    endTime: {
      hours: 0,
      minutes: 0
    }
  };

  private _events: MyEvent[] = [
    {
      title: 'My Event',
      date: new Date().setHours(12, 0),
      startTime: {
        hours: 12,
        minutes: 0
      },
      endTime: {
        hours: 14,
        minutes: 30
      }
    },
    {
      title: 'My Event2',
      date: new Date().setHours(13, 0),
      startTime: {
        hours: 13,
        minutes: 0
      },
      endTime: {
        hours: 15,
        minutes: 0
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
