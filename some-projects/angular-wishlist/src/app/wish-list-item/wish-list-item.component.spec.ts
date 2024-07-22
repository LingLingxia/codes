import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListItemComponent } from './wish-list-item.component';

describe('WishListItemComponent', () => {
  let component: WishListItemComponent;
  let fixture: ComponentFixture<WishListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishListItemComponent]
    });
    fixture = TestBed.createComponent(WishListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
