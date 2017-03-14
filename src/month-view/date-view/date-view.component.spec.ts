/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { GmDateViewComponent } from './date-view.component';

describe('Component: DateView', () => {
  let component: GmDateViewComponent;
  let fixture: ComponentFixture<GmDateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GmDateViewComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmDateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
