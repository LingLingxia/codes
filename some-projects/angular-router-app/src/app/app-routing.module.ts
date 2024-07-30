import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductslistComponent } from './products/productslist/productslist.component';

const routes: Routes = [
  {path:"",component: FirstComponent},
  {path:"second",component: SecondComponent},
  {path:"products",component:ProductslistComponent },
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
