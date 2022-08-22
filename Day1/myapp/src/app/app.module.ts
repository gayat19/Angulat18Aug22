import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerService } from './services/customer.service';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    FirstComponent,
    CustomerComponent,
    CustomersComponent,
    AddCustomerComponent,
    ProductComponent,
    ProductsComponent,
    CartComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CustomerService,ProductService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
