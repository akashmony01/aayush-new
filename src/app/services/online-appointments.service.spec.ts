import { TestBed } from '@angular/core/testing';

import { OnlineAppointmentsService } from './online-appointments.service';

describe('OnlineAppointmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlineAppointmentsService = TestBed.get(OnlineAppointmentsService);
    expect(service).toBeTruthy();
  });
});
