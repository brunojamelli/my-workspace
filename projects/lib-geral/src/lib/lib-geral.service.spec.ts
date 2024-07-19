import { TestBed } from '@angular/core/testing';

import { LibGeralService } from './lib-geral.service';

describe('LibGeralService', () => {
  let service: LibGeralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibGeralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
