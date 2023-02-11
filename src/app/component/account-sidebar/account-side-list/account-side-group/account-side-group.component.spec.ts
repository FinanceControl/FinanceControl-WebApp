import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSideGroupComponent } from './account-side-group.component';

describe('AccountSideGroupComponent', () => {
  let component: AccountSideGroupComponent;
  let fixture: ComponentFixture<AccountSideGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSideGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSideGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
