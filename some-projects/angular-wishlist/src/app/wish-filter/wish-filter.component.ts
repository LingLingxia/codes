import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() filter:any
  @Output() filterChange = new EventEmitter<any>();
  constructor(){}
  ngOnInit(): void {
     this.updateFilter('0');
  }

  listFilter = "0";
  updateFilter(number:any){
    this.filterChange.emit(filters[Number(number)]);
  }
}
