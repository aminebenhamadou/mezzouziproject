import { TestBed } from '@angular/core/testing';

import { AnnanceStateServiceService } from './Services/annance-state-service.service';

describe('AnnanceStateServiceService', () => {
  let service: AnnanceStateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnanceStateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
