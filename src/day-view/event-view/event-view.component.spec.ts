/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { GmEventViewComponent } from './event-view.component';
import { GmCalendarService } from '../../calendar.service';

describe('Component: GmEventView', () => {
  let component: GmEventViewComponent;
  let fixture: ComponentFixture<GmEventViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GmEventViewComponent],
      providers: [GmCalendarService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmEventViewComponent);
    component = fixture.componentInstance;
    component.dayViewItem = {
      startTime: { hours: 0, minutes: 0 },
      endTime: { hours: 0, minutes: 0 },
      startVal: 0,
      endVal: 0,
      before: [],
      after: []
    };
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
