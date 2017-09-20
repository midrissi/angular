import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  StoreModule
} from '@ngrx/store';
import { ItemDetail } from './components/item-detail.component';
import { ItemsList } from './components/items-list.component';
import { items, selectedItem, ItemService } from './items';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        FormsModule
      ],
      providers: [ItemService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should find the items list component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('items-list')).toBeTruthy();
  }));
  it('should find the item detail component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('item-detail')).toBeTruthy();
  }));
});
