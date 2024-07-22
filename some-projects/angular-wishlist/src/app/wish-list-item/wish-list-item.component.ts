import { Component ,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {
  @Input() wishText! : string;
  @Input() fulfilled! : boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();
  toggleFulfilled(){
      this.fulfilledChange.emit(!this.fulfilled);
  }
}
