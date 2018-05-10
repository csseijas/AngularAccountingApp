import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBenefitsComponent } from './main-benefits.component';

describe('MainIncomesComponent', () => {
  let component: MainBenefitsComponent;
  let fixture: ComponentFixture<MainBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
