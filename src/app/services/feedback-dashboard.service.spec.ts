import { TestBed } from '@angular/core/testing';

import { FeedbackDashboardService } from './feedback-dashboard.service';

describe('FeedbackDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedbackDashboardService = TestBed.get(FeedbackDashboardService);
    expect(service).toBeTruthy();
  });
});
