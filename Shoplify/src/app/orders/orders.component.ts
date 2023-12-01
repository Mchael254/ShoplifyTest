import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private userService: UserService) { }
  userDetails: any;
  details: any;
  name: any;
  orders: any[] = [];
  order: any[] = [];
  items: any[] = [];
  email: any;

  getDetails() {
    this.userDetails = localStorage.getItem('details') || '{}';
    this.details = JSON.parse(this.userDetails)
    // console.log(this.details);

    this.name = this.details.userName;

  }


  //order by email
  orderByEmail() {
    this.userService.fetchOrders().subscribe((orders: any) => {
      this.orders = orders.filter((order: any) => order.email === this.details.email);
      // console.log(this.orders);
    });
  }

  // all order items
  orderItems() {
    this.userDetails = localStorage.getItem('details') || '{}';
    this.details = JSON.parse(this.userDetails)
    this.email = this.details.email;
    this.userService.fetchItems().subscribe((response: any) => {
        if (response.ordersWithItems) {
            const userEmail = this.email;
            this.items = response.ordersWithItems.filter((item: any) => item.email === userEmail);
            console.log(this.items);
        } else {
            console.error('Error fetching items:', response.message);
        }
    });
}


  ngOnInit() {
    this.getDetails();
    this.orderByEmail();
    this.orderItems();

  }





}
