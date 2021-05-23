import { TestBed } from '@angular/core/testing';

import { AccountManagerAPIService } from './account-manager-api.service';

describe('AccountManagerAPIService', () => {
  let service: AccountManagerAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountManagerAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
