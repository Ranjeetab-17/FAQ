import { TestBed } from '@angular/core/testing';

import { NgloaderService } from './ngloader.service';

describe('NgloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgloaderService = TestBed.get(NgloaderService);
    expect(service).toBeTruthy();
  });
});
