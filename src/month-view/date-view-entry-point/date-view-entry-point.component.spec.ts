/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { GmDateViewEntryPointComponent } from './date-view-entry-point.component';
import { GmCalendarModule } from '../../';

describe('Component: DateViewEntryPoint', () => {
  let component: GmDateViewEntryPointComponent;
  let fixture: ComponentFixture<GmDateViewEntryPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations: [GmDateViewEntryPointComponent]
      imports: [GmCalendarModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmDateViewEntryPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
