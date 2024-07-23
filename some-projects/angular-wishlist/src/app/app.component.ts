import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import {EventService} from "./../shared/services/EventServices";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:WishItem[] = [
    new WishItem("to learn angular"),
    new WishItem("Get Coffee",true),
    new WishItem("Find grass that cuts itself")
  ];

  constructor(events: EventService){
    events.listen("removeWish",(wish:any)=>{
      let index = this.items.indexOf(wish);
      this.items.splice(index,1);
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
