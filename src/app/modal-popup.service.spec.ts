import { TestBed } from '@angular/core/testing';

import { ModalPopupService } from './modal-popup.service';

describe('ModalPopupService', () => {
  let service: ModalPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
