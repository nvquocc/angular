import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Shop } from './Shop';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ShopService {
    api = 'https://5e7f53ec7a92ed001656046e.mockapi.io/product';
    constructor(
        private http: HttpClient
    ) {



    }
    getShops(): Observable<Shop[]>{
        return this.http.get<Shop[]>(this.api);
    }
    getShop(id): Observable<Shop>{

        console.log(id);
        return this.http.get<Shop>(`${this.api}/${id}`);
    }
    addShop(shop){
        return this.http.post<Shop>(`${this.api}`,shop);
    }
    updateShop(shop): Observable<Shop>{
        return this.http.put<Shop>(`${this.api}/${shop.id}`, shop);
    }

    removeShop(id): Observable<Shop> {
        return this.http.get<Shop>(`${this.api}/${id}`);
    }

}

