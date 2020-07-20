import { Component, OnInit } from '@angular/core';
import { Shop } from '../compopents/Shop';
import { ShopService } from '../compopents/shop.service';
import { data } from '../compopents/MockData';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  selected: Shop;
  shops: Shop[];
  constructor(
    private shopServices: ShopService
  ) { }

  ngOnInit() {
    this.getShops();
  }
  getShops(){
    this.shopServices.getShops().subscribe(data => {
      this.shops=data;
    });
  }
  removeItem(id){
    this.shopServices.removeShop(id).subscribe(response =>{
      
     this.shops= this.shops.filter(shop => shop.id != response.id );
    })
  }
}
