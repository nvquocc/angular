import { Component, OnInit } from '@angular/core';
import { Shop } from '../compopents/Shop';
import { ShopService } from '../compopents/shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {
shop: Shop;
  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getShop();
  }
  getShop(){
    this.route.params.subscribe(param => {
      console.log(param.id);
      this.shopService.getShop(param.id).subscribe(data =>{
        this.shop = data;
      })
    });
  }

}
