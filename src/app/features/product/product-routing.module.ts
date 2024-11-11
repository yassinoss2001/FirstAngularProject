import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from 'src/app/components/form-product/form-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'add', component: FormProductComponent },
  { path: ':id', component: ProductComponent }, //PathParam
   //PathParam

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
