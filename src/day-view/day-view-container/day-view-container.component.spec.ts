/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { GmDayViewContainerComponent } from './day-view-container.component';
import { ElementRef } from '@angular/core';
import { GmCalendarService } from '../../calendar.service';

describe('Component: GmDayViewContainer', () => {
  let component: GmDayViewContainerComponent;
  let fixture: ComponentFixture<GmDayViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GmDayViewContainerComponent],
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
    fixture = TestBed.createComponent(GmDayViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
