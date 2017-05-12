 /*tshint bitwise: false*/

import { Component,
         OnInit,
         OnDestroy,
         Input,
         ElementRef,
         AfterViewInit,
         ViewChild,
         Renderer } from '@angular/core';
// import { GmDayViewItem } from '../day-view-item';

@Component({
  selector: 'gm-day-view',
  template: `
    <ng-content></ng-content>
    <div *ngIf='isToday' #nowLine class='gm-day-view-line now'></div>
  `,
  styles: [`
    :host {
      flex: 1 0;
      position: relative;
      height: 100%;
    }
  `]
})
export class GmDayViewComponent implements OnInit, AfterViewInit {

  // pixelsPerMs: number;

  // private blockItems: any;

  // @Input() itemTemplate: TemplateRef<any>;

  // @Input() dayViewItems: GmDayViewItem[];
  @Input() isToday: boolean;

  @ViewChild('nowLine') nowLine: ElementRef;

  private elHeight = 0;
  private _callbackId: number;

  // private nowMarker: {
  //   pxFromTop: number;
  // };

  constructor(
    // private svc: GmCalendarService,
    private _elRef: ElementRef,
    private renderer: Renderer
    /*private _vcRef: ViewContainerRef*/) { }

  ngOnInit() {
    // if (this.isToday) {
    //   this.placeNowMarker();
    //   window.addEventListener('onfocus', this.placeNowMarker);
    // }

    // // console.log(elHeight);
    // this.svc.pixelsPerMs = elHeight / (24 * 60 * 60 * 1000);

    // if (this.itemTemplate) {
    //   this._vcRef.createEmbeddedView(this.itemTemplate);
    // }
  }

  ngAfterViewInit() {
    // if (this.isToday) {
    //   window.removeEventListener('onfocus', this.placeNowMarker);
    // }

    this.elHeight = this._elRef.nativeElement.offsetHeight;

    if (this._callbackId) {
      cancelAnimationFrame(this._callbackId);
    }

    if (this.nowLine) {
      this._positionNowLine();

      let secs = new Date().getSeconds();
      let prevTimestamp = performance.now();
      const timer: FrameRequestCallback = timestamp => {
        const diff = timestamp - prevTimestamp;
        if (secs + diff / 1000 > 60) {
          secs = 0;
          this._positionNowLine();
        } else {
          secs += diff / 1000;
        }
        prevTimestamp = timestamp;
        this._callbackId = requestAnimationFrame(timer);
      };
      this._callbackId = requestAnimationFrame(timer);
    }
  }

  private _positionNowLine() {
    const now = new Date();
    const factor = now.getHours() + now.getMinutes() / 60;

    this.renderer.setElementStyle(this.nowLine.nativeElement, 'top', (this.elHeight / 24 * factor) + 'px');
  }

}
