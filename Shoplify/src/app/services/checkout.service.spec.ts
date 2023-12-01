import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { CheckoutService } from './checkout.service';

describe('CheckoutService', () => {
  let service: CheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CheckoutService]
    });
    service = TestBed.inject(CheckoutService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //make order
  it('should make order', () => {
    const orderDetails = {
      "products": [
        {
          "id": "1",
          "name": "product1",
          "price": 10,
          "quantity": 1
        }
      ],
      "totalPrice": 10,
      "totalQuantity": 1,
      "buyer": {
        "id": "1",
        "name": "buyer1",
        "email": "eucs@gmail.com"
      },
    };

    service.makeOrder(orderDetails).subscribe((res) => {
      expect(res).toEqual(orderDetails);
    });

    const req = httpMock.expectOne('http://localhost:5400/order/makeOrder');
    expect(req.request.method).toBe('POST');
    req.flush(orderDetails);

  })




});
