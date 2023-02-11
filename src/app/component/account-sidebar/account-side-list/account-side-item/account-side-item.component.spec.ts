import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSideItemComponent } from './account-side-item.component';

describe('AccountSideItemComponent', () => {
  let component: AccountSideItemComponent;
  let fixture: ComponentFixture<AccountSideItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSideItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
