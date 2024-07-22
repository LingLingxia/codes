import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
const filters = [
  (item:WishItem)=>item,
  (item:WishItem)=>!item.isComplete,
  (item:WishItem)=>item.isComplete,
]
@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<any>();
  constructor(){}
  ngOnInit(): void {
     this.filter();
  }

  listFilter = "0";
  filter(){
    this.filterChange.emit(filters[Number(this.listFilter)]);
  }
}
