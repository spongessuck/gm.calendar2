/* tslint:disable:no-unused-variable */

import { NgModule } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { GmCalendarModule,
         GmDateViewComponent,
         GmMonthViewComponent,
         GmDateViewEntryPointComponent } from '../';

// @NgModule({
//   declarations: [
//     GmMonthViewComponent,
//     GmDateViewEntryPointComponent,
//     GmDateViewComponent
//   ],
//   entryComponents: [GmDateViewComponent]
// }) class TestModule {};

describe('Component: MonthView', () => {
  let component: GmMonthViewComponent;
  let fixture: ComponentFixture<GmMonthViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GmCalendarModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmMonthViewComponent);
    component = fixture.componentInstance;
    component.date = new Date();
    component.items = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
