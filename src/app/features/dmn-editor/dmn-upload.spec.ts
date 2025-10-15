import { TestBed } from '@angular/core/testing';

import { DmnUpload } from './dmn-upload';

describe('DmnUpload', () => {
  let service: DmnUpload;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmnUpload);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
