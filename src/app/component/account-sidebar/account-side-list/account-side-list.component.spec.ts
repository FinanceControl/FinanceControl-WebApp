import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSideListComponent } from './account-side-list.component';

describe('AccountSideListComponent', () => {
  let component: AccountSideListComponent;
  let fixture: ComponentFixture<AccountSideListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSideListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
