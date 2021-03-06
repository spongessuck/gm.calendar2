import { Component,
         OnInit,
         HostBinding,
         Input } from '@angular/core';
// import { GmEventItem } from '../event-item';
import { GmCalendarService } from '../../calendar.service';
import { GmDayViewItem } from '../../day-view-item';

@Component({
  selector: 'gm-event-view',
  template: `
    <div class="gm-cal-item-spacer" *ngFor="let before of dayViewItem.before"></div>
    <div class="gm-cal-item-container">
      <div class="gm-cal-item"
          [style.height.px]="dayViewItem.height">
        <ng-content></ng-content>
        <!--<div class="gm-cal-item-footer">{{item.before.length + ' ' + item.after.length}}</div>-->
      </div>
    </div>
    <div class="gm-cal-item-spacer" *ngFor="let after of dayViewItem.after"></div>
  `
})
export class GmEventViewComponent implements OnInit {

  @HostBinding('style.top.px') get pixelsFromTop(): number {
    if (!this.dayViewItem || !this.dayViewItem.pixelsFromTop) {
      return 0;
    }
    return this.dayViewItem.pixelsFromTop;
  }

  @Input() set item(item: GmDayViewItem) {
    this.dayViewItem = Object.assign(
      {},
      item,
      this.svc.metricsOb(item.startVal, item.endVal)
    );
  }

  dayViewItem: GmDayViewItem;

  constructor(private svc: GmCalendarService) { }

  ngOnInit() {
  }
}
