import { Component, OnInit } from '@angular/core';
import { ProductService } from '../compopents/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../compopents/Product';
import { data } from '../compopents/MockData';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
product:Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
   this.route.params.subscribe(param => {
     this.productService.getProduct(param.id).subscribe(data =>{
      this.product = data;
   });
  
  })

  }
  updateProduct(){
    this.productService.updateProduct(this.product).subscribe(data =>{
      this.router.navigateByUrl('/manager');
    })
  }
}
