import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SinglepageService } from '../services/singlepage.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  selectedProduct: any;
 productDetails: any;
 productError: string = '';
  errorResponse: any;
  response: boolean = false

  //forms
  showAcceptanceForm: boolean = false
  successForm: boolean = false


  constructor(private http: HttpClient,  private router: Router,private singleService:SinglepageService) { }

  //product details
 productName: string = '';
 productPrice: number = 0;
  userEmail: string = '';
 productCategory: string = '';
 supplierContact: string = '';

  //cart
  cartItemCount: number = 0;
  searchTearm: string = '';
  cartVanish: boolean = true;
  existingCartItems: any[] = [];


  orderProduct() {
    const userEmail = localStorage.getItem('user_email');
    if(userEmail === 'michealvenum007@gmail.com'){
      this.router.navigate(['/admin']);
    }else{
      if(this.selectedProduct){
        this.existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const existingCartItem = this.existingCartItems.find((item: any) => item.productID === this.selectedProduct.productID);

        if (existingCartItem) {
          existingCartItem.quantity += 1;
        }else{

         this. existingCartItems.push({ ...this.selectedProduct, quantity: 1 ,userEmail: userEmail});
        }
      }

      this.selectedProduct.Quantity -= 0;
      this.singleService.setCartItems(this.existingCartItems);

      localStorage.setItem('cartItems', JSON.stringify(this.existingCartItems));

      this.cartItemCount = this.existingCartItems.reduce((count, item) => count + item.quantity, 0);
      this.cartVanish = false

    }


  }

outOfStock: boolean = false
  ngOnInit() {
    const userEmail = localStorage.getItem('user_email');
   
    this.existingCartItems = this.singleService.getCartItems();
  
    const productDetails = localStorage.getItem('selectedProduct');
  
    if (productDetails) {
      this.selectedProduct = JSON.parse(productDetails);
  
      if (this.selectedProduct.Quantity > 0) {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        this.cartItemCount = existingCartItems.reduce((count: number, item: any) => count + item.quantity, 0);
      } else {
        this.outOfStock = true
        this.cartVanish = false
        return; 
      }
    } else {
      console.error('No product details found in localStorage.');
    }
  }
  









}
