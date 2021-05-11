import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component'
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path:"product",
  component: ProductComponent
},
{
  path:"product/create",
  component: ProductCreateComponent
},
{
  path:"product/update",
  component: ProductUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
