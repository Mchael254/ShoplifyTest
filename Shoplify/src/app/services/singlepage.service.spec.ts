import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { SinglepageService } from './singlepage.service';

describe('SinglepageService', () => {
  let service: SinglepageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SinglepageService]
    });

    service = TestBed.inject(SinglepageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //get cart items
  it('should set and get cart items', () => {
    const cartItems = [
      {
        "id": "1",
        "name": "product1",
        "price": 10,
        "quantity": 1
      }
    ];

    service.setCartItems(cartItems);
    expect(service.getCartItems()).toEqual(cartItems);
  });

  //set cart items
  it('should set cart items', () => {
    const cartItems = [
      {
        "id": "1",
        "name": "product1",
        "price": 10,
        "quantity": 1
      }
    ];

    service.setCartItems(cartItems);
    expect(service.getCartItems()).toEqual(cartItems);
  });

  //check if emails are matching
  it('should check if emails are matching', () => {
    const userEmail = "michealvenum007@gmail.com";
    const cartItems = [
      {
        "id": "1",
        "name": "product1",
        "price": 10,
        "quantity": 1,
      },
    ];

    localStorage.setItem('user_email', userEmail);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    expect(service.areEmailsMatching()).toEqual(false);

  });

});
