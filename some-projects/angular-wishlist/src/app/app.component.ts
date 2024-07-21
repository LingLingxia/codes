import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
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
  toggleItem(item:WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
