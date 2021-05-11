import { TestBed } from '@angular/core/testing';

import { TailwindLibService } from './tailwind-lib.service';

describe('TailwindLibService', () => {
  let service: TailwindLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TailwindLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
