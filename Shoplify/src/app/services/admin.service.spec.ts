import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminService]
    });
    service = TestBed.inject(AdminService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // test for creating product
  it('should create product', () => {
    const productDetails = {
      "name": "product1",
      "price": 10,
      "quantity": 1,
      "description": "description1",
      "imageUrl": "imageUrl1",
      "category": "category1",
      "seller": "seller1"
    };

    service.createProduct(productDetails).subscribe((res) => {
      expect(res).toEqual(productDetails);
    });
    const req = httpMock.expectOne('http://localhost:5400/product/createProduct');
    expect(req.request.method).toBe('POST');
    req.flush(productDetails);

  });

  // test for fetching products
  it('should fetch products', () => {
    const products = [
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

    service.fetchProducts().subscribe((res) => {
      expect(res).toEqual(products);
    });
    const req = httpMock.expectOne('http://localhost:5400/product/getProducts');
    expect(req.request.method).toBe('GET');
    req.flush(products);

  });

  // test for fetching soft deleted products
  it('should fetch soft deleted products', () => {
    const products = [
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

    service.softDeletedProducts().subscribe((res) => {
      expect(res).toEqual(products);
    });
    const req = httpMock.expectOne('http://localhost:5400/product/softDeletedProducts');
    expect(req.request.method).toBe('GET');
    req.flush(products);

  });

  // test for updating product
  it('should update product', () => {
    const productDetails = {
      "id": "1",
      "name": "product1",
      "price": 10,
      "quantity": 1,
      "description": "description1",
      "imageUrl": "imageUrl1",
      "category": "category1",
      "seller": "seller1"
    };

    service.updateProduct(productDetails).subscribe((res) => {
      expect(res).toEqual(productDetails);
    });
    const req = httpMock.expectOne('http://localhost:5400/product/updateProduct');
    expect(req.request.method).toBe('PUT');
    req.flush(productDetails);

  });

  // test for soft deleting product
  it('should delete product', () => {
    const productId = "1";

    service.deleteProduct(productId).subscribe((res) => {
      expect(res).toEqual(productId);
    });
    const req = httpMock.expectOne('http://localhost:5400/product/deleteProduct/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(productId);

  });


});
