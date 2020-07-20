import { Component, OnInit } from '@angular/core';
import { Product } from '../compopents/Product';
import {ProductService} from '../compopents/product.service';
import { data } from '../compopents/MockData';

import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  product: Product = new Product();
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  } 
  addProduct(){
   this.productService.addProduct(this.product).subscribe(data => this.router.navigateByUrl('/manager'));
    
  }

  
}
