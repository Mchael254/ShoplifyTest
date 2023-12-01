import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  private updateResponse: string = '';
  private errorResponse: string = '';

  private apiUrl = 'http://localhost:5400/order';

  private makeOrderUrl = 'http://localhost:5400/order/makeOrder';

  //make order
  makeOrder(orderDetails: any): Observable<any> {
    this.updateResponse = 'order made successfully';
    return this.http.post(this.makeOrderUrl, orderDetails).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof ErrorEvent) {
        } else if (error instanceof HttpErrorResponse) {
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
}
