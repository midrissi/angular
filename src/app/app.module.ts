import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  StoreModule
} from '@ngrx/store'

import { AppComponent } from './app.component';
import { ItemDetail } from './components/item-detail.component';
import { ItemsList } from './components/items-list.component';
import { items, selectedItem, ItemService } from './items';

@NgModule({
  declarations: [
    AppComponent,
    ItemsList,
    ItemDetail
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      items: items,
      selectedItem: selectedItem
    }),
    FormsModule,
    HttpModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
