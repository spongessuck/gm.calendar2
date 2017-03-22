import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
// import { GmEventItem } from '../event-item';
import { GmCalendarService } from '../../calendar.service';
// import { GmCalDay } from '../cal-day';

interface Marker {
  pxFromTop: number;
}

@Component({
  selector: 'gm-day-view-container',
  template: `
    <div class="gm-day-view-line" *ngFor="let mark of markers; let $index = index" [style.top.px]="mark.pxFromTop">
      {{markerText($index)}}
    </div>
    <!--<div class="gm-day-view-line now" [style.top.px]="nowMarker.pxFromTop"></div>-->
    <div class="gm-day-view-spacer">
    </div>
    <!--<gm-day-view *ngFor="let day of days" [items]="day"></gm-day-view>-->
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
      position: relative;
    }
  `]
})
export class GmDayViewContainerComponent implements OnInit, AfterViewInit  {

  @Input() scrollToHour = 0;

  markers: {
    pxFromTop: number;
  }[];

  constructor(
    private svc: GmCalendarService,
    private elRef: ElementRef) { }

  ngOnInit() {
    const elHeight = this.elRef.nativeElement.offsetHeight;
    this.svc.pixelsPerMs = elHeight / (24 * 60 * 60 * 1000);
    // console.log(elHeight);
    this.markers = [];
    for (let i = 0; i < 24; i++) {
      this.markers.push({ pxFromTop: i * elHeight / 24 });
    }
    // const now = new Date();
    // const factor = now.getHours() + now.getMinutes() / 60;
    // this.nowMarker = { pxFromTop: elHeight / 24 * factor };
  }

  ngAfterViewInit() {
    // Scroll to given hour
    const startHourLine = this.elRef.nativeElement.querySelector('.gm-day-view-line:nth-child(' + (+this.scrollToHour + 1) + ')');
    if (startHourLine) {
      this.elRef.nativeElement.parentNode.scrollTop = startHourLine.offsetTop;
    }
  }

  markerText(idx: number) {
    if (idx === 0) {
      return 'Midnight';
    }
    if (idx === 12) {
      return 'Noon';
    }
    return String(idx % 12);
  }

}
