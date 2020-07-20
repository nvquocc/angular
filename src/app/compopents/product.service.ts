import { Injectable } from '@angular/core';
import {data} from '../compopents/MockData';
import {Product} from '../compopents/Product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class ProductService{
    api = 'https://5e7f53ec7a92ed001656046e.mockapi.io/product';
    
    constructor(
        private http:HttpClient 
    )    
    {

    }
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.api);
    }

    getProduct(id): Observable<Product>{

        return this.http.get<Product>(`${this.api}/${id}`);
    }
    addProduct(product){
        return this.http.post<Product>(`${this.api}`,product);
    }
    updateProduct(product): Observable<Product>{
        return this.http.put<Product>(`${this.api}/${product.id}`, product);
    }

    removeProduct(id): Observable<Product> {
        return this.http.get<Product>(`${this.api}/${id}`);
    }

    }   
    
  

    