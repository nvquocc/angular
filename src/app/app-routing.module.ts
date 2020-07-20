import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShopComponent } from './shop/shop.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopAddComponent } from './shop-add/shop-add.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShopEditComponent } from './shop-edit/shop-edit.component';
import { TestCompopentComponent } from './test-compopent/test-compopent.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
  { path: 'manager', component: ProductManagerComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'shop', component: ShopListComponent },
      { path: 'shop/add', component: ShopAddComponent },
      { path: 'shop/:id', component: ShopDetailsComponent },
      { path: 'shop/edit/:id', component: ShopEditComponent }

    ]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
