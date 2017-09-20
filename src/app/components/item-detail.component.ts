import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Item} from '../interfaces/item.interface';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetail {
  originalName: String;
  selectedItem: Item;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set item(value: Item){
    if (value) this.originalName = value.name;
    this.selectedItem = Object.assign({}, value);
  }
}
