import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
      
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // test for fetching orders
  it('should fetch orders', () => {
    const orders = [
      {
        "id": "1",
        "name": "product1",
        "price": 10,
        "quantity": 1,
        "description": "description1",
        "imageUrl": "imageUrl1",
        "category": "category1",
        "seller": "seller1"
      },
      {
        "id": "2",
        "name": "product2",
        "price": 20,
        "quantity": 2,
        "description": "description2",
        "imageUrl": "imageUrl2",
        "category": "category2",
        "seller": "seller2"
      }
    ];

    service.fetchOrders().subscribe((res) => {
      expect(res).toEqual(orders);
    });
    const req = httpMock.expectOne('http://localhost:5400/order');
    expect(req.request.method).toBe('GET');
    req.flush(orders);

  });

  // test for fetching orders with items
  it('should fetch orders with items', () => {
    const orders = [
      {
        "id": "1",
        "name": "product1",
        "price": 10,
        "quantity": 1,
        "description": "description1",
        "imageUrl": "imageUrl1",
        "category": "category1",
        "seller": "seller1"
      },
      {
        "id": "2",
        "name": "product2",
        "price": 20,
        "quantity": 2,
        "description": "description2",
        "imageUrl": "imageUrl2",
        "category": "category2",
        "seller": "seller2"
      }
    ];

    service.fetchItems().subscribe((res) => {
      expect(res).toEqual(orders);
    });
    const req = httpMock.expectOne('http://localhost:5400/order/getOrders');
    expect(req.request.method).toBe('GET');
    req.flush(orders);

  });



});
