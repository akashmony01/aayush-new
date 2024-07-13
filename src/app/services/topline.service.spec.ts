import { TestBed } from '@angular/core/testing';

import { ToplineService } from './topline.service';

describe('ToplineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToplineService = TestBed.get(ToplineService);
    expect(service).toBeTruthy();
  });
});
