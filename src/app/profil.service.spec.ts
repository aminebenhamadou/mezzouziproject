import { TestBed } from '@angular/core/testing';

import { ProfilService } from './Services/profil.service';

describe('ProfilService', () => {
  let service: ProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
