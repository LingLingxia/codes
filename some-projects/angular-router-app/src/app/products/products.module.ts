import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';



@NgModule({
  declarations: [
    ProductslistComponent,
    ProductdetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
