/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ElementRef, Renderer } from '@angular/core';
import { GmDayViewComponent } from './day-view.component';

describe('Component: GmDayView', () => {
  let component: GmDayViewComponent;
  let fixture: ComponentFixture<GmDayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GmDayViewComponent],
      providers: [
        {
          provide: ElementRef,
          useValue: {
            nativeElement: document.createElement('div')
          }
        },
        Renderer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmDayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
