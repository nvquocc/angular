import { Component, OnInit } from '@angular/core';
import { Shop } from '../compopents/Shop';
import { ShopService } from '../compopents/shop.service';
import { Router } from '@angular/router';
import { data } from '../compopents/ShopData';

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.component.html',
  styleUrls: ['./shop-add.component.scss']
})
export class ShopAddComponent implements OnInit {
  shop: Shop = new Shop();
  constructor(
    private shopServices: ShopService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addShop(){
    this.shopServices.addShop(this.shop).subscribe(data => this.router.navigateByUrl('/admin/shop'));

}
}