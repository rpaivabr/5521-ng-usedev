import { TestBed } from '@angular/core/testing';

import { CartData } from './cart-data';

describe('CartData', () => {
  let service: CartData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
