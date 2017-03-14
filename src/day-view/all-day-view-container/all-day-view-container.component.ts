import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { GmEventItem } from '../../event-item';
import { GmCalendarService } from '../../calendar.service';

@Component({
  selector: 'gm-all-day-view-container',
  template: `
    <div class='gm-day-view-line'>
      All day
    </div>
    <div style='height:100%; width:40px'>
    </div>
    <!--<gm-day-view *ngFor='let day of days' [items]='day'></gm-day-view>-->
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
      position: relative;
    }

    .gm-day-view-line {
      position: absolute;
      width: 100%;
      border-top: 1px solid whitesmoke;
    }
  `]
})
export class GmAllDayViewContainerComponent implements OnInit  {

  @Input() days: [GmEventItem[]];

  constructor(
    private svc: GmCalendarService,
    private elRef: ElementRef) { }

  ngOnInit() {
  }

}
