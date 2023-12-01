import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private updateResponse: string = '';
  private errorResponse: string = '';

  private apiUrl = 'http://localhost:5400/product';
  private softDeletedapiUrl = 'http://localhost:5400/product/softDeletedProducts';

  private createProductUrl = 'http://localhost:5400/product/createProduct';


  //create Product
  createProduct(productData: any): Observable<any> {
    this.updateResponse = '';
    return this.http.post(this.createProductUrl, productData).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof ErrorEvent) {
          // Client error
          this.updateResponse += 'fill all fields';
          setTimeout(() => {
            this.errorResponse = ''
          }, 3000);
        } else if (error instanceof HttpErrorResponse) {
          // Server error
          if (error.error && error.error.error) {
            this.errorResponse += `   ${error.statusText} - ${error.error.error}`;
            setTimeout(() => {
              this.errorResponse = ''
            }, 3000);
          } else {
            this.errorResponse += ` Server-side error: ${error.status} - ${error.statusText}`;
          }
        }

        throw error;
      })

    )
  }

  updateResponses(): string {
    return this.updateResponse;
  }
  errorResponses(): string {
    return this.errorResponse;
  }

  //fetchProducts
  fetchProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  //fetch soft deleted products
  softDeletedProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.softDeletedapiUrl);
  }

  //restore soft deleted product
  restoreProduct(productID: string): Observable<any> {
    const url = `${this.apiUrl}/restoreProduct?productID=${productID}`;
    return this.http.put(url, {}); 
  }



  //update product
  updateProduct(productDataUpdate: any): Observable<any> {
    const updateProductUrl = `${this.apiUrl}/updateProduct`;
    return this.http.put(updateProductUrl, productDataUpdate);
  }

  //soft delete product
    deleteProduct(productID: string): Observable<any> {
      const url = `${this.apiUrl}/deleteProduct?productID=${productID}`;
      return this.http.delete(url);
    }


}
