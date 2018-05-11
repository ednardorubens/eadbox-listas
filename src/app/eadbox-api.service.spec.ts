import { TestBed, inject } from '@angular/core/testing';

import { EadboxApiService } from './eadbox-api.service';

describe('EadboxApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EadboxApiService]
    });
  });

  it('should be created', inject([EadboxApiService], (service: EadboxApiService) => {
    expect(service).toBeTruthy();
  }));
});
