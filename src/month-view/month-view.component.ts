import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gm-month-view',
  templateUrl: './month-view.component.html',
  styles: [`
    :host > table {
      width: 100%;
      table-layout: fixed;
    }

    tr {
      vertical-align: top;
    }
  `]
})
export class GmMonthViewComponent implements OnInit {

  @Input() date = new Date();
  @Input() items: {
    date: Date,
    title: string
  }[];

  month: {
    date: Date,
    weeks: {
      days: {
        date: Date,
        items: any[]
      }[]
    }[]
  };

  constructor() { }

  ngOnInit() {
    const firstOfMonth = new Date(this.date.setDate(1));
    const firstOfMonthVal = firstOfMonth.setHours(0, 0, 0, 0);
    const dayMod = -firstOfMonth.getDay() + 1;
    this.month = {
      date: firstOfMonth,
      weeks: []
    };
    for (let wi = 0; wi < 6; wi++) {
      const w = {
        days: []
      };
      for (let di = 0; di < 5; di++) {
        const week = wi * 7;
        const day = di + 1;
        const dayDate = new Date(new Date(new Date(firstOfMonth).setDate(week + day)).setHours(24 * dayMod, 0, 0, 0));
        const firstInDaysMonthVal = new Date(dayDate).setDate(1);
        if (di === 0 && firstInDaysMonthVal > firstOfMonthVal) {
          // Whole week is in next month
          break;
        } else if (di === 4 && firstInDaysMonthVal < firstOfMonthVal) {
          // Whole week is in previous month
          w.days.splice(0, w.days.length);
        } else {
          const inDifferentMonth = firstInDaysMonthVal !== firstOfMonthVal;
          const d = {
            date: dayDate,
            differentMonth: inDifferentMonth,
            items: (inDifferentMonth ? [] : this.items.filter( i => {
              return new Date(i.date).setHours(0, 0, 0, 0) === dayDate.valueOf();
            }))
          };
          w.days.push(d);
        }
      }

      if (w.days.length > 0) {
        this.month.weeks.push(w);
      }
    }
  }

}
