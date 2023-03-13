import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCreateFormComponent } from './stock-create-form.component';

describe('StockCreateFormComponent', () => {
  let component: StockCreateFormComponent;
  let fixture: ComponentFixture<StockCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
