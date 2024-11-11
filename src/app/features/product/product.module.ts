import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPricePipe } from 'src/app/pipes/search-price.pipe';
import { FormProductComponent } from '../../components/form-product/form-product.component';


@NgModule({
  declarations: [ProductComponent, SearchPricePipe, FormProductComponent],
  imports: [CommonModule, ProductRoutingModule, FormsModule, ReactiveFormsModule ],
  exports: [ProductComponent],
})
export class ProductModule {}
