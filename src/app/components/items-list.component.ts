import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html'
})
export class ItemsList {
  @Input() items: Item[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
