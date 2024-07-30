import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
    product: any = {};
    constructor(private store:ProductsService,private route:ActivatedRoute){}
    ngOnInit(): void {
      this.route.paramMap.subscribe((params:ParamMap)=>{
        let id = params.get("id");
        if(id){
          this.store.getProduct(parseInt(id)).subscribe(item=>{
            this.product = item;
          })
        }

      })
    }
}
