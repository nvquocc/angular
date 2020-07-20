import { Component, OnInit } from '@angular/core';
import { Product } from '../compopents/Product';
import { ProductService } from '../compopents/product.service';
import { ActivatedRoute } from '@angular/router';
import { data } from '../compopents/MockData';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // this.route.params.subscribe(param =>{

    //  this.product = this.productService.getProduct(param.id);
    // this.productService.getProduct(param.id).sub
    // }
    this.getProduct();
      
  }

  getProduct(){
    this.route.params.subscribe(param => {
      console.log(param.id);
      this.productService.getProduct(param.id).subscribe(data =>{
        this.product = data;
      })
    });
  }
}


