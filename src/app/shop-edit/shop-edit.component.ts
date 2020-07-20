import { Component, OnInit } from '@angular/core';
import { Shop } from '../compopents/Shop';
import { ShopService } from '../compopents/shop.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent implements OnInit {
shop: Shop
  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getShops();
  }

  getShops(){
    this.route.params.subscribe(param => {
      this.shopService.getShop(param.id).subscribe(data =>{
       this.shop = data;
    });
   
   })
  }
  updateShop(){
    this.shopService.updateShop(this.shop).subscribe(data =>{
      this.router.navigateByUrl('/admin/shop');
  })
}
}


