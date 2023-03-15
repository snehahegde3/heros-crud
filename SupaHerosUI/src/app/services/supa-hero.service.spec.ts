import { TestBed } from '@angular/core/testing';

import { SupaHeroService } from './supa-hero.service';

describe('SupaHeroService', () => {
  let service: SupaHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupaHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
