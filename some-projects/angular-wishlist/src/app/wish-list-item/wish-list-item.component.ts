import { Component ,EventEmitter,Input, Output } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import events from "./../../shared/services/EventServices";
@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {
  // @Input() wishText! : string;
  // @Input() fulfilled! : boolean;
  // @Output() fulfilledChange = new EventEmitter<boolean>();
  @Input() wish! : WishItem;
  get cssClass(){
    // 1. return String
    // 2. return Array
    // 3. return object
    return { "strike text-muted":this.wish.isComplete}
  }

  removeWish(){
    events.emit("removeWish",this.wish);
  }

  toggleFulfilled(){
      //this.fulfilledChange.emit(!this.fulfilled);
      this.wish.isComplete = !this.wish.isComplete;
  }
}
