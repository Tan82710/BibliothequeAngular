import { TestBed } from '@angular/core/testing';

import { BibliothequeService } from './bibliotheque.service';

describe('BibliothequeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BibliothequeService = TestBed.get(BibliothequeService);
    expect(service).toBeTruthy();
  });
});
