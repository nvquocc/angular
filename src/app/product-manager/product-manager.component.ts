import { Component, OnInit } from '@angular/core';
import { ProductService } from '../compopents/product.service';
import { Product } from '../compopents/Product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {
  product: Product = new Product();
  products: Product[];
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }




  ngOnInit() {
    this.getProducts();
  }
  addProduct() {
    this.productService.addProduct(this.product).subscribe(data => this.router.navigateByUrl('/manager'));

  }

  getProducts() {

    this.productService.getProducts().subscribe(data => {
      this.products = data;

    });
  }
  removeItem(id) {
    this.productService.removeProduct(id).subscribe(response => {

      this.products = this.products.filter(product => product.id != response.id);
      console.log(id);
    })
  }
}
