import { TestBed } from '@angular/core/testing';

import { MessagelogsService } from './messagelogs.service';

describe('MessagelogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagelogsService = TestBed.get(MessagelogsService);
    expect(service).toBeTruthy();
  });
});