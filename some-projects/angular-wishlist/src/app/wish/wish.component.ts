import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/services/EventServices';
import { WishService } from './wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
  items: WishItem[] = [];

  constructor(events: EventService ,private wishService:WishService ){
    events.listen("removeWish",(wish:any)=>{
      let index = this.items.indexOf(wish);
      this.items.splice(index,1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe({
      next:(data:any)=>{
        this.items = data;
      },
      error:(error: any) =>{
        console.log(error)
      }
    })
  }

  // //this is like a watch function in vue
  // get visibleItems() :WishItem[] {
  //    return this.items.filter(filters[Number(this.listFilter)])
  // }
  // addNewWish(){
  //   this.items.push(new WishItem(this.newWishText));
  //   this.newWishText = "";
  // }
  filter:any = ()=>{}
  toggleItem(item:WishItem){
    item.isComplete = !item.isComplete;
  }
}
