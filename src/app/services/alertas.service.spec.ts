/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertasService } from './alertas.service';

describe('AlertasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertasService]
    });
  });

  it('should ...', inject([AlertasService], (service: AlertasService) => {
    expect(service).toBeTruthy();
  }));
});
