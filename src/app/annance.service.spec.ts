import { TestBed } from '@angular/core/testing';

import { AnnanceService } from './Services/annance.service';

describe('AnnanceService', () => {
  let service: AnnanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
