import { Component } from '@angular/core';
import { GmEventItem, GmDayViewItem } from '../../src';
import { GmCalendarService } from '../../src/calendar.service';

interface EventItem extends GmEventItem {
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monthMode = true;
  month = new Date();
  items: GmDayViewItem[];

  private _events = [
    {
      title: 'hi',
      date: new Date()
    }
  ];

  constructor() {
    this.items = GmCalendarService.eventItemsToDayViewItems(this._events.map( event => {
      return Object.assign({}, event, {
        startTime: {
          hours: 22,
          minutes: 0
        },
        endTime: {
          hours: 22,
          minutes: 30
        }
      });
    }));
  }

  switch(_monthMode: boolean) {
    this.monthMode = _monthMode;
  }
}
