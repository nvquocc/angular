import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';

import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ShopComponent } from './shop/shop.component';
import { ShopManagerComponent } from './shop-manager/shop-manager.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopAddComponent } from './shop-add/shop-add.component';
import { ShopEditComponent } from './shop-edit/shop-edit.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { TestCompopentComponent } from './test-compopent/test-compopent.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    DashboardComponent,
    ProductListComponent,
    ProductManagerComponent,
    ProductAddComponent,
    ProductDetailsComponent,
    ProductComponent,
    ContactComponent,
   
    NotFoundComponent,
    ProductEditComponent,
    ShopComponent,
    ShopManagerComponent,
    ShopListComponent,
    ShopAddComponent,
    ShopEditComponent,
    ShopDetailsComponent,
    TestCompopentComponent,
    BlogComponent,
    AboutComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
