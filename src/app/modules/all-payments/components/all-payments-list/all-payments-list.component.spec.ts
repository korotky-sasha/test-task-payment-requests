import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPaymentsListComponent } from './all-payments-list.component';

describe('AllPaymentsListComponent', () => {
  let component: AllPaymentsListComponent;
  let fixture: ComponentFixture<AllPaymentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPaymentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPaymentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
