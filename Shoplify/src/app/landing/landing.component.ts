import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { SinglepageService } from '../services/singlepage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private adminService:AdminService,private router:Router,private singleService:SinglepageService) { }
  products: any[] = [];
  filteredProducts: any[] = [];
  searchTearm: string = '';

  //cart
  cartItemCount: number = 0;


 productClick(product:any){
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  console.log(isLoggedIn);

  if (isLoggedIn === 'true') {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    this.router.navigate(['/single']);
  } else {
    this.router.navigate(['/signin']);
  }

 }


  fetchProducts() {
    this.adminService.fetchProducts().subscribe((products: any) => {
      this.products = products;

      this.filteredProducts = [...this.products];

      console.log(products);
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product) =>
    product.productName.toLowerCase().includes(this.searchTearm.toLowerCase()) &&
    (this.selectedCategory === '' || product.productCategory === this.selectedCategory)
  );
      
  }
  selectedCategory: string = '';
  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.filterProducts();
  }
  getUniqueCategories(): string[] {
    const uniqueCategories = new Set<string>();
    this.filteredProducts.forEach(product => {
      uniqueCategories.add(product.productCategory);
    });
    return Array.from(uniqueCategories);
  }


  ngOnInit(): void {
    this.singleService.clearCartIfEmailsMismatch();
    this.fetchProducts();
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.cartItemCount = existingCartItems.reduce((count:number, item:any) => count + item.quantity, 0);


  }

}
