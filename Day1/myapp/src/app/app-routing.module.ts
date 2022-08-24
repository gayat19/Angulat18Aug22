import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'edit',component:EditProductComponent},
  {path:'cart',component:CartComponent},
  {path:'list',component:ListproductComponent,children:[
    {path:'details/:pid',component:ProductdetailComponent}
  ]},

  {path:'details/:pid',component:ProductdetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
