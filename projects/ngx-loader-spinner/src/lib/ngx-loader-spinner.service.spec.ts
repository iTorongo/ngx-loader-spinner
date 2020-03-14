import { TestBed } from '@angular/core/testing';

import { NgxLoaderSpinnerService } from './ngx-loader-spinner.service';

describe('NgxLoaderSpinnerService', () => {
  let service: NgxLoaderSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLoaderSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
