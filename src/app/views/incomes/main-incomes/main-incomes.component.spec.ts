import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIncomesComponent } from './main-incomes.component';

describe('MainIncomesComponent', () => {
  let component: MainIncomesComponent;
  let fixture: ComponentFixture<MainIncomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainIncomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIncomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
