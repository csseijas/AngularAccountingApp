import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingDonutChartComponent } from './accounting-donut-chart.component';

describe('AccountingFooterComponent', () => {
  let component: AccountingDonutChartComponent;
  let fixture: ComponentFixture<AccountingDonutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingDonutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
