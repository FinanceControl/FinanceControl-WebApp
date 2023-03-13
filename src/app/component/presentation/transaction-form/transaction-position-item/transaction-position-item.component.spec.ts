import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPositionItemComponent } from './transaction-position-item.component';

describe('TransactionPositionItemComponent', () => {
  let component: TransactionPositionItemComponent;
  let fixture: ComponentFixture<TransactionPositionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionPositionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionPositionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
