import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FirstComponent } from './first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TextPipe } from './text.pipe';
import { ShowchangeDirective } from './showchange.directive';
import { PaymentComponent } from './payment/payment.component';
import { CardformatDirective } from './cardformat.directive';
import { DitestComponent } from './ditest/ditest.component';
import { TestDirective } from './test.directive';
import { RegisterComponent } from './register/register.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { UnderstandComponent } from './understand/understand.component';
import { PostComponent } from './post/post.component';
import { BlogPostService } from './services/blogpost.service';
import { ProductHttpService } from './services/producthttp.service';
import { AddProductComponent } from './add-product/add-product.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './services/weather.service';

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
    EditProductComponent,
    TextPipe,
    ShowchangeDirective,
    PaymentComponent,
    CardformatDirective,
    DitestComponent,
    TestDirective,
    RegisterComponent,
    ProductdetailComponent,
    ListproductComponent,
    UnderstandComponent,
    PostComponent,
    AddProductComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomerService, WeatherService,ProductService,CartService,BlogPostService,ProductHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
