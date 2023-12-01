import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SinglepageService {

  constructor() { }

  private cartItems: any[] = [];

  getCartItems(): any[] {
    return this.cartItems;
  }

  setCartItems(items: any[]): void {
    this.cartItems = items;
  }

  areEmailsMatching(): boolean {
    const userEmail = localStorage.getItem('user_email');
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

    // Check if cartItems is not empty and the first item's userEmail matches
    return cartItems.length > 0 && cartItems[0].userEmail === userEmail;
  }

  // Clear cartItems if user emails don't match
  clearCartIfEmailsMismatch(): void {
    if (!this.areEmailsMatching()) {
      localStorage.removeItem('cartItems');
    }
  }
  
}
