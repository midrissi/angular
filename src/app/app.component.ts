import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ItemService } from './items';
import { AppStore } from './interfaces/app-store.interface';
import { Item } from './interfaces/item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<Array<Item>>;
  selectedItem: Observable<Item>;
  title = 'app';

  constructor(
    private itemsService: ItemService,
    private store: Store<AppStore>
  ){
    this.items = itemsService.items;
    this.selectedItem = store.select('selectedItem');

    this.items.subscribe(v => console.log(v));
    itemsService.loadItems();
  }

  onDelete(one) {
    this.itemsService.deleteOne(one);
  }

  onSelect(one) {
    this.store.dispatch({
      type: 'SELECT_ITEM',
      payload: one
    });
  }

  onSave(one) {
    this.itemsService.save(one);
  }

  onCancel(one) {
    this.store.dispatch({
      type: 'SELECT_ITEM',
      payload: null
    });
  }
}
