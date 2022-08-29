import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { CartComponent } from './cart/cart.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { PostComponent } from './post/post.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UnderstandComponent } from './understand/understand.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'edit',component:EditProductComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthenticationGuard]},
  {path:'list',component:ListproductComponent,children:[
    {path:'details/:pid',component:ProductdetailComponent}
  ]},

  {path:'details/:pid',component:ProductdetailComponent},
  {path:'post',component:WeatherComponent},
  {path:'',component:UnderstandComponent},
  {path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
