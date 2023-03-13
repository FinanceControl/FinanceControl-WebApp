import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPositionComponent } from './transaction-position.component';

describe('TransactionPositionComponent', () => {
  let component: TransactionPositionComponent;
  let fixture: ComponentFixture<TransactionPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
