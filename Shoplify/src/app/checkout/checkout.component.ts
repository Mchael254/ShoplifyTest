import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private router: Router,private checkoutService:CheckoutService) { }

  emptyCart: boolean = false
  paymentOptions: boolean = false
  deletes: boolean = false
  orderMade: boolean = false

  //container
  container: boolean = true

  //cart items
  cartItems: any[] = [];
  cartItemCount: number = 0;
  total: number = 0;
  existingCartItems: any[] = [];
  showAcceptanceForm: boolean = false;
  totalAmount: number = 0;
  summary: boolean = false;
  userEmail: any


  reduce(item: any) {
    if (item.quantity > 0) {
      item.quantity -= 1;
      this.updateLocalStorage();
      this.updateUICount();
      this.calculateTotal();
    }
  }
  add(item: any) {
    item.quantity += 1;
    this.updateLocalStorage();
    this.updateUICount();
    this.calculateTotal();
  }

  //remove item from cart
  remove(item: any) {
    this.showAcceptanceForm = true;
  }
  decline() {
    this.showAcceptanceForm = false;

  }
  continue(item: any) {
    setTimeout(() => {
      const index = this.existingCartItems.indexOf(item);
      this.existingCartItems.splice(index, 1);
      this.updateLocalStorage();
      this.updateUICount();
      this.calculateTotal();
      if (this.totalAmount == 0) {
        this.emptyCart = true
        this.summary = false
      }

    }, 2000);
    this.showAcceptanceForm = false;

  }

  ngOnInit() {
    this.existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.cartItemCount = this.existingCartItems.reduce((count: number, item: any) => count + item.quantity, 0);

    this.calculateTotal();
    this.checkTotal()
  }


  calculateTotal() {
    this.totalAmount = this.existingCartItems.reduce((total: number, item: any) => {
      return total + (item.productPrice * item.quantity);
    }, 0);

  }

  private updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.existingCartItems));
  }
  private updateUICount() {
    this.cartItemCount = this.existingCartItems.reduce((count: number, item: any) => count + item.quantity, 0);
  }

  private checkTotal() {
    if (this.totalAmount == 0) {
      this.emptyCart = true
    } else {
      this.emptyCart = false
      this.summary = true
    }
  }


  makeOrder() {
    const userEmail = localStorage.getItem('user_email');
    const currentDate = new Date().toISOString().split('T')[0];
    const totalAmount = this.totalAmount;
    const orderDetails = {
      orderDate: currentDate,
      email: userEmail,
      totalAmount: totalAmount,
      items: this.existingCartItems.map(item => ({
        productID: item.productID,
        quantity: item.quantity,
        productPrice: item.productPrice,
        
        productDescription:item.productDescription,
        productImage:item.productImage,
        productName:item.productName
      }))
    };
    console.log(orderDetails);

    this.checkoutService.makeOrder(orderDetails).subscribe(
      response => {
        this.orderMade = true;
        setTimeout(() => {
          this.orderMade = false;
        }, 2000);

        console.log(response);
        localStorage.setItem('cartItems', '[]');
        this.existingCartItems = [];
        this.cartItemCount = 0;
        this.summary = false;
        this.emptyCart = true;
      },
      error => {
        console.error(error);

      }
    );
  }



}
