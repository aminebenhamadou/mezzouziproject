import { TestBed } from '@angular/core/testing';

import { AnnanceStateService } from './Services/annance-state.service';

describe('AnnanceStateService', () => {
  let service: AnnanceStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnanceStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
