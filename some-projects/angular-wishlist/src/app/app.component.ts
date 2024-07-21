import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filters = [
  (item:WishItem)=>item,
  (item:WishItem)=>!item.isComplete,
  (item:WishItem)=>item.isComplete,
]
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
  title = 'my wishlist';
  newWishText = "";
  listFilter: String = "0";
  get visibleItems() :WishItem[] {
     return this.items.filter(filters[Number(this.listFilter)])
  }
  addNewWish(){
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = "";
  }
  toggleItem(item:WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
