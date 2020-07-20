import { Component, OnInit } from '@angular/core';
// import {data} from '../compopents/MockData';
import { Product } from '../compopents/Product';
import { ProductService } from '../compopents/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
selected: Product;
products: Product[];
  constructor(
    private productService: ProductService
  )
   { }

  ngOnInit(){ 
    this.getProducts();
  }
  showDetails(product){
    this.selected = product;
  }
  getProducts(){    
    this.productService.getProducts().subscribe(data => {
      this.products=data;
    });
   }

   removeItem(id){
     this.productService.removeProduct(id).subscribe(response =>{
       
      this.products= this.products.filter(product => product.id != response.id );
     })
   }

}
