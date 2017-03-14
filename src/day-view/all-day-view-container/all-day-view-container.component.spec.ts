/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { GmAllDayViewContainerComponent } from './all-day-view-container.component';
import { ElementRef } from '@angular/core';
import { GmCalendarService } from '../../calendar.service';

describe('Component: GmAllDayViewContainer', () => {
  let component: GmAllDayViewContainerComponent;
  let fixture: ComponentFixture<GmAllDayViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GmAllDayViewContainerComponent],
      providers: [
        GmCalendarService,
        {
          provide: ElementRef,
          useValue: {
            nativeElement: document.createElement('div')
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmAllDayViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
