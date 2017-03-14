/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GmCalendarService } from './calendar.service';

describe('Service: GmCalendar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GmCalendarService]
    });
  });

  it('should ...', inject([GmCalendarService], (service: GmCalendarService) => {
    expect(service).toBeTruthy();
  }));
});
