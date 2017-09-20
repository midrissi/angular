import {
  Store
} from '@ngrx/store';

import {
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs';
import { Http, Headers } from '@angular/http';

import { Item } from './interfaces/item.interface';
import { AppStore } from './interfaces/app-store.interface';

@Injectable()
export class ItemService {
  items: Observable<Array<Item>>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.items = store.select('items');
  }

  loadItems() {
    this.http
      .get('/items')
      .map(res => res.json())
      .map(payload => ({
        type: 'ADD_ITEMS',
        payload
      }))
      .subscribe(action => this.store.dispatch(action))
  }

  deleteOne(one) {
    this.http
      .delete(`/items/${one.id}`)
      .subscribe(() => this.store.dispatch({
        type: 'DELETE_ITEM',
        payload: one
      }));
  }

  updateItem(one: Item) {
    this.http
      .put(`/items/${one.id}`, one)
      .map(res => res.json())
      .map(payload => ({
        type: 'UPDATE_ITEM',
        payload: one
      }))
      .subscribe(action => this.store.dispatch(action));
  }

  createItem(item: Item) {
    this.http
      .post('/items', item)
      .map(res => res.json())
      .map(payload => ({
        type: 'CREATE_ITEM',
        payload: item
      }))
      .subscribe(action => this.store.dispatch(action));
  }

  save(one) {
    (one.id) ? this.updateItem(one) : this.createItem(one);
  }
};

// The "items" reducer performs actions on our list of items
export function items(state: any = [], { type, payload }) {
  switch (type) {
    case 'ADD_ITEMS':
      return payload;
    case 'CREATE_ITEM':
      return [...state, payload];
    case 'UPDATE_ITEM':
      return state.map(item => {
        return item.id === payload.id ? Object.assign({}, item, payload) : item;
      });
    case 'DELETE_ITEM':
      return state.filter(item => {
        return item.id !== payload.id;
      });
    default:
      return state;
  }
};

// The "selectedItem" reducer handles the currently selected item
export function selectedItem(state: any = null, { type, payload }) {
  switch (type) {
    case 'SELECT_ITEM':
      return payload;
    default:
      return state;
  }
};
